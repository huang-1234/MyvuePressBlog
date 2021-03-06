# c++VSCode编码格式配置

习惯在代码中左花括号不换行的风格，网上搜了下，在vscode中settings.json设置如下：

```json
"editor.formatOnSave": true,
    "C_Cpp.clang_format_style": "{ BasedOnStyle: Chromium, IndentWidth: 4}"
```

其中launch.json配置文件代码如下：

```cpp
{
 // 使用 IntelliSense 了解相关属性。 
 // 悬停以查看现有属性的描述。
 // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
 "version": "0.2.0",
 "configurations": [
  {
   "name": "gcc.exe - 生成和调试活动文件",
   "type": "cppdbg",
   "request": "launch",
   "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
   "args": [],
   "stopAtEntry": false,
   "cwd": "${workspaceFolder}",
   "environment": [],
   "externalConsole": true, //控制台输出,false则不显示终端窗口
   "MIMode": "gdb",
   "miDebuggerPath": "F:\\WareDownload\\C++\\mingw64\\bin\\gdb.exe", //修改成你自己的路径
   "setupCommands": [
    {
     "description": "为 gdb 启用整齐打印",
     "text": "-enable-pretty-printing",
     "ignoreFailures": true
    }
   ],
   "preLaunchTask": "gcc.exe build active file"//该处一定要与tasks.json的lable一致
  }
 ]
}
```

tasks.json配置文件代码如下：

```cpp
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "shell",
      "label": "gcc.exe build active file", //一定与preLaunchTask一致
      "command": "F:\\WareDownload\\C++\\mingw64\\bin\\gdb.exe", //改为你自己的路径
      "args": [
        "-g",
        "${file}",
        // "${fileDirname}\\printf.c",
        "-o",
        "${fileDirname}\\${fileBasenameNoExtension}.exe"
      ],
      "options": {
        "cwd": "F:\\WareDownload\\C++\\mingw64\\bin" //改为自己的路径的bin文件夹
      },
      "problemMatcher": [
        "$gcc"
      ],
      "group": "build"
    }
  ]
}
```

注1：要特别注意两个配置文件中的注释部分，尤其是路径部分，要改成自己的安装路径。
注2：两个配置文件中的三处“gcc”和“g++”的区别？（gcc链接c代码，g++链接c++？）。
注3：若要链接多个源文件，则解开tasks.json配置文件中“args”部分代码即可（示例链接printf.c文件），有更简便的方法不需要枚举所有c源文件，自行百度尝试。
注4：配置完成后保存.vscode文件，复制到其他工程的根目录下可省略下一次的重新配置。
注5：每次更改完配置文件后要及时保存，否则不更新配置信息。

```json
// VSCode支持ESLint自动格式化
{
	"editor.lineNumbers": "on", //开启行数提示
	"editor.quickSuggestions": {
		//开启自动显示建议
		"other": true,
		"comments": true,
		"strings": true
    },
    //使用制表符缩进
	"prettier.useTabs": true, 
	"editor.tabSize": 2, //制表符符号eslint
	"editor.formatOnSave": true, //每次保存自动格式化
	"prettier.semi": true, //去掉代码结尾的分号
	"prettier.singleQuote": true, //使用单引号替代双引号
	"prettier.trailingComma": "none", //去除对象最末尾元素跟随的逗号
	"javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
	"vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
	"vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
	"[vue]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"eslint.run": "onSave",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"prettier.printWidth": 200, //指定代码长度，超出换行
	"prettier.requireConfig": true, //需要prettier.requireConfig格式化
	"prettier.useEditorConfig": false,
	// "eslint.validate": [
	//   //开启对.vue文件中错误的检查
	//   "javascript",
	//   "javascriptreact",
	//   {
	//     "language": "html",
	//     "autoFix": true
	//   },
	//   {
	//     "language": "vue",
	//     "autoFix": true
	//   }
	// ],
	"terminal.integrated.rendererType": "dom",
	"[typescript]": {
		"editor.defaultFormatter": "vscode.typescript-language-features"
	},
	"editor.detectIndentation": false,
	"[html]": {
		"editor.defaultFormatter": "vscode.html-language-features"
	},
  "window.zoomLevel": 1
}

```

