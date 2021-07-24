rem 设置BMFont软件安装路径

set ROOT_PATH=%~dp0

node %ROOT_PATH%\build_bmfont\index.js --src=%ROOT_PATH% --dst=%ROOT_PATH%\dst

pause
