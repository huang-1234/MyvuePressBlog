(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{650:function(t,s,a){"use strict";a.r(s);var o=a(6),r=Object(o.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"linux-创建文件命令总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-创建文件命令总结"}},[t._v("#")]),t._v(" Linux 创建文件命令总结")]),t._v(" "),a("h3",{attrs:{id:"_1-vi或vim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vi或vim"}},[t._v("#")]),t._v(" 1. vi或vim")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# vi webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//直接创建并打开一个文件webpack.config.js")]),t._v("\n")])])]),a("p",[t._v("用vi 编辑器编辑文本后，如果是新创建的文件，默认保存在当前目录下，如果想保存到指定目录下，可以在vi 编辑器中，按Esc键切换到命令模式，然后用w命令写到指定目录下的指定新建文件，如写到/tmp/test.txt文件，则在vi命令模式下输入"),a("code",[t._v(":w /tmp/test.txt")]),t._v("写好后，在/tmp目录下新的文件test.txt就被创建了。")]),t._v(" "),a("h3",{attrs:{id:"_2-touch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-touch"}},[t._v("#")]),t._v(" 2. touch")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# touch file2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建新的空文件file2.txt")]),t._v("\n")])])]),a("p",[t._v("touch的另一个作用是更改一个文件或目录的时间。")]),t._v(" "),a("h3",{attrs:{id:"_3-echo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-echo"}},[t._v("#")]),t._v(" 3. echo")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a new file"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" file3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建文件file3.txt并将this is a new file写入")]),t._v("\n（说明：使用"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("指令覆盖文件原内容并重新输入内容，若文件不存在则创建文件。）\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add contents"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("file3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在已存在的文件补充写入新内容add contents")]),t._v("\n（说明：使用"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("指令向文件追加内容，原内容将保存。）\n")])])]),a("blockquote",[a("p",[t._v("拓展： Linux中输出重定向>和>>的区别，>是覆盖，>>是追加\n> 会重写文件，如果文件里面有内容会覆盖。\n>> 追加文件。也就是如果文件里面有内容会把新内容追加到文件尾")])]),t._v(" "),a("h3",{attrs:{id:"_4-less-、more-、cat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-less-、more-、cat"}},[t._v("#")]),t._v(" 4. less 、more 、cat")]),t._v(" "),a("p",[t._v("三者都是将文件内容输出到标准输出，其中less和more可以分页显示，cat是显示全部。\n三者可以根据已经存在的文件创建新的文件。假设已经存在文件1.txt。\ncat 1.txt > 2.txt\nless 1.txt > 3.txt\nmore 1.txt > 4.txt\n此时创建的文件内容都和1.txt中文件内容相同。")]),t._v(" "),a("ul",[a("li",[t._v("cat命令可以一次显示整个文件，如果文件比较大，使用不是很方便；适用于文件内容少的情况。")])]),t._v(" "),a("blockquote",[a("p",[t._v("cat主要有三大功能：\n1）一次显示整个文件:cat filename\n2）从键盘创建一个文件:cat > filename 只能创建新文件,不能编辑已有文件.\n3）将几个文件合并为一个文件:cat file1 file2 > file")])]),t._v(" "),a("ul",[a("li",[t._v("more命令可以让屏幕在显示满一屏幕时暂停，此时可按空格健继续显示下一个画面，或按Q键停止显示。")]),t._v(" "),a("li",[t._v("less命令也可以分页显示文件，和more命令的区别就在于它支持上下键卷动屏幕，当结束浏览时，只要在less命令的提示符“: ”下按Q键即可。")])]),t._v(" "),a("h3",{attrs:{id:"_5-cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-cd"}},[t._v("#")]),t._v(" 5. cd")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" file3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建新的空文件file3.txt")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" file4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建新的空文件file3.txt")]),t._v("\n")])])]),a("p",[t._v("cd最主要的作用是切换目录，在cd后面跟>或>>再加上文件名就可以创建一个内容为空的文件。它和echo的区别之处在于echo可写文件内容，而cd并不能。")]),t._v(" "),a("h2",{attrs:{id:"创建dir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建dir"}},[t._v("#")]),t._v(" 创建dir")]),t._v(" "),a("p",[t._v("mkdir 命令，是 make directories 的缩写，用于创建新目录，此命令所有用户都可以使用。")]),t._v(" "),a("p",[t._v("mkdir 命令的基本格式为：")]),t._v(" "),a("p",[t._v("[root@localhost ~]# mkdir [-mp] 目录名")]),t._v(" "),a("ul",[a("li",[t._v("-m 选项用于手动配置所创建目录的权限，而不再使用默认权限。")]),t._v(" "),a("li",[t._v("-p 选项递归创建所有目录，以创建 /home/test/demo 为例，在默认情况下，你需要一层一层的创建各个目录，而使用 -p 选项，则系统会自动帮你创建 /home、/home/test 以及 /home/test/demo。")])]),t._v(" "),a("p",[t._v("【例 1】建立目录。")]),t._v(" "),a("p",[t._v("[root@localhost ~]#mkdir cangls\n[root@localhost ~]#ls\nanaconda-ks.cfg cangls install.log install.log.syslog")]),t._v(" "),a("p",[t._v("我们建立一个名为 cangls 的目录，通过 ls 命令可以查看到这个目录已经建立。注意，我们在建立目录的时候使用的是相对路径，所以这个目录被建立到当前目录下。")]),t._v(" "),a("p",[t._v("【例 2】使用 -p 选项递归建立目录。")]),t._v(" "),a("p",[t._v('[root@localhost ~]# mkdir lm/movie/jp/cangls\nmkdir:无法创建目录"lm/movie/jp/cangls":没有那个文件或目录\n[root@localhost ~]# mkdir -p lm/movie/jp/cangls\n[root@localhost ~]# ls\nanaconda-ks.cfg cangls install.log install.log.syslog lm\n[root@localhost ~]# ls lm/\nmovie\n#这里只查看一级子目录，其实后续的jp目录、cangls目录都已经建立')]),t._v(" "),a("p",[t._v("【例 3】使用 -m 选项自定义目录权限。")]),t._v(" "),a("p",[t._v("[root@localhost ~]# mkdir -m 711 test2\n[root@localhost ~]# ls -l\ndrwxr-xr-x 3 root root 4096 Jul 18 12:50 test\ndrwxr-xr-x 3 root root 4096 Jul 18 12:53 test1\ndrwx--x--x 2 root root 4096 Jul 18 12:54 test2")]),t._v(" "),a("p",[t._v("仔细看上面的权限部分，也就是 ls 命令输出的第一列数据（绿色部分），test 和 test1 目录由于不是使用 -m 选项设定访问权限，因此这两个目录采用的是默认权限（这里的默认权限值是 755，后续章节再详细介绍默认权限）。")]),t._v(" "),a("p",[t._v("而在创建 test2 时，使用了 -m 选项，通过设定 711 权限值来给予新的目录 drwx--x--x 的权限，有关权限值的具体含义也放到后续章节介绍。")]),t._v(" "),a("h3",{attrs:{id:"删除空目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除空目录"}},[t._v("#")]),t._v(" 删除空目录")]),t._v(" "),a("p",[t._v("和 mkdir 命令（创建空目录）恰好相反，rmdir（remove empty directories 的缩写）命令用于删除空目录，此命令的基本格式为：")]),t._v(" "),a("p",[t._v("[root@localhost ~]# rmdir [-p] 目录名")]),t._v(" "),a("p",[t._v("-p 选项用于递归删除空目录。")]),t._v(" "),a("p",[t._v("【例 1】")]),t._v(" "),a("p",[t._v("[root@localhost ~]#rmdir cangls")]),t._v(" "),a("p",[t._v("就这么简单，命令后面加目录名称即可，但命令执行成功与否，取决于要删除目录是否是空目录，因为 rmdir 命令只能删除空目录。")]),t._v(" "),a("p",[t._v("【例 2】\n通过学习 mkdir 命令我们知道，使用 mkdir -p 可以实现递归建立目录，同样地，rmdir 命令可以使用 -p 选项递归删除目录。例如：")]),t._v(" "),a("p",[t._v("[root@localhost ~]# rmdir -p lm/movie/jp/cangls")]),t._v(" "),a("p",[t._v("注意，此方式先删除最低一层地目录（这里先删除 cangls），然后逐层删除上级目录，删除时也需要保证各级目录是空目录。")]),t._v(" "),a("p",[t._v("【例 3】\nrmdir 命令的作用十分有限，因为只能刪除空目录，所以一旦目录中有内容，就会报错。例如：")]),t._v(" "),a("p",[t._v('[root@localhost # mkdir test\n#建立测试目录\n[root@localhost ~]# touch test/boduo\n[root@localhost ~]# touch test/longze\n#在测试目录中建立两个文件\n[root@localhost ~]# rmdir test\nrmdir:删除"test"失败：目录非空')]),t._v(" "),a("p",[t._v('这个命令比较"笨"，所以并不常用。后续我们会学习 rm 命令，使用此命令不但可以删除目录，还可以删除文件。')])])}),[],!1,null,null,null);s.default=r.exports}}]);