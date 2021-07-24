游戏开发，需要使用字体。

直接使用 TTF 字体，其优点是开发特别省事。

而缺点却是很要命：
1. TTF 字体文件过大，包含了不必要的字，增大了包体，减缓了加载速度；
2. 部分平台不支持 TTF 文件的加载；（笔者就曾遇到过这个问题：动态精简后的 ttf 文件，微信平台支持加载，在手 Q 平台和 Android 平台就不支持）；

为了解决全平台的字体加载问题，我们就不得不选择 `位图字体` 。

基于`使用位图字体`这个大前提下，来定制我们的 `解决方案`。

解决方案的核心问题用一句话描述就是：`如何从一个文本文件（包含所需的字符）出发，创建位图字体文件？`

# 解决方案

## 1. 创建 `Words.txt` 用于 `存储文字`。
![在这里插入图片描述](https://img-blog.csdnimg.cn/525f33cf163042bb96eed0259b074907.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1bWFueGluZw==,size_16,color_FFFFFF,t_70)
## 2. 准备好 ttf 文件
用于测试的免费字体文件：[秋鸿楷 ttf 文件](https://www.100font.com/thread-154.htm)
下载解压后，命名为 `QHK.ttf`

## 3. 万事具备，只差`程序`
```mermaid
	graph LR
	A(Worlds.txt ,QHK.ttf)-- 程序 --> C(QHK.fnt 和 QHK.png)
```

### 3.1 Windows 下的程序
核心思路是：利用 BMFont 软件来输出目标文件。

1. 下载官方的 BMFont 软件 [Bitmap Font Generator(http://www.angelcode.com/products/bmfont/)](http://www.angelcode.com/products/bmfont/)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9f0e8f83fbb14c3ea8bdb0fe5acc4d94.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1bWFueGluZw==,size_16,color_FFFFFF,t_70)

2. 解压文件，将 bmfont1.14a 移动到工程目录下（和 QHK.ttf 和 Words.txt 同级）
![在这里插入图片描述](https://img-blog.csdnimg.cn/6a7ae89804e84e7f9890b2236b4346e7.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1bWFueGluZw==,size_16,color_FFFFFF,t_70)



