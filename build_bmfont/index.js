"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const minimist_1 = __importDefault(require("minimist"));
const path_1 = __importDefault(require("path"));
let argv = minimist_1.default(process.argv.slice(2));
const srcPath = path_1.default.join(argv.src);
const dstPath = path_1.default.join(argv.dst);
const wordsTxtPath = path_1.default.join(srcPath, "Words.txt");
const bmfcPath = path_1.default.join(srcPath, "bmfont.bmfc");
const qhkFntPath = path_1.default.join(argv.dst, "QHK.fnt");
const bmfont64exe = path_1.default.join(__dirname, "bmfont1.14a/bmfont64.exe");;

console.log(">> build_bmfont >> Start");
let callCmdSync = function (cmd, cwd) {
    console.log(`---->> 在 ${cwd} 目录下执行指令 ${cmd} >>----`);
    let result = '';
    try {
        result = child_process_1.default.execSync(cmd, { cwd: cwd, encoding: 'utf-8' });
    }
    catch (error) {
        console.error(error);
    }
    console.log(result);
    return result;
};


console.log(`---->> 读取动态字库文本 ${wordsTxtPath} >>----`);
let wordsTxtStr = fs_extra_1.default.readFileSync(wordsTxtPath, { encoding: 'utf8' });
console.log(wordsTxtStr);
/**
 * 需要转成 utf16le，并且是 crlf 格式
 * https://gist.github.com/zoellner/4af04a5a8b51f04ad653e26d3b7181ec
 */
console.log("---->> 动态将文本回写 >>----");
const utf16buffer = Buffer.from(`\ufeff${wordsTxtStr}`, 'utf16le');
fs_extra_1.default.writeFileSync(wordsTxtPath, utf16buffer);

callCmdSync(`${bmfont64exe} -t ${wordsTxtPath} -c ${bmfcPath}  -o ${qhkFntPath}`, dstPath);

console.log(">> build_bmfont >> End");
