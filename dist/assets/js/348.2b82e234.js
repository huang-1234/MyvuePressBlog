(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{863:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-分支管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-分支管理"}},[t._v("#")]),t._v(" Git 分支管理")]),t._v(" "),s("h2",{attrs:{id:"git-branch-中蕴含的哲学"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-branch-中蕴含的哲学"}},[t._v("#")]),t._v(" Git branch 中蕴含的哲学")]),t._v(" "),s("ul",[s("li",[t._v("Production-ready code 与 developing code 的分离")]),t._v(" "),s("li",[t._v("Do one thing, do it well. 每个分支的目的性明确，只做一件事。")]),t._v(" "),s("li",[t._v("多功能可以并行开发，且新功能与 hot fix 可以同步进行。")])]),t._v(" "),s("h2",{attrs:{id:"简化-branch-new-branch-checkout-new-branch-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简化-branch-new-branch-checkout-new-branch-操作"}},[t._v("#")]),t._v(" 简化 branch new-branch & checkout new-branch 操作")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new-branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])])]),s("h2",{attrs:{id:"应用场景-加入一个临时功能-并在活动结束后去掉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-加入一个临时功能-并在活动结束后去掉"}},[t._v("#")]),t._v(" 应用场景：加入一个临时功能，并在活动结束后去掉")]),t._v(" "),s("p",[t._v("git merge 默认是 fast-forward, 即合并分支后，从 log 中去掉了分支历史。")]),t._v(" "),s("p",[t._v("所以，要满足这个需求，就需要禁用这个功能。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new-feature"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --no-ff\n")])])]),s("p",[t._v("同时，git 会创建一个 merge commit.")]),t._v(" "),s("h2",{attrs:{id:"之前整理的笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#之前整理的笔记"}},[t._v("#")]),t._v(" 之前整理的笔记")]),t._v(" "),s("p",[t._v("Unlike many other VCSs, Git encourages a workflow that branches and merges often, even multiple times in a day. Understanding and mastering this feature gives you a powerful and unique tool and can literally change the way that you develop.")]),t._v(" "),s("p",[t._v("无论是添加新功能，还是修改bug。都应先建立一个对应的分支，完成后，合并到主分 支。这样就能保证，在开发新功能的同时，如果有一个紧急的bug需要修改，我就可以 切回主分支进行修改(先提交修改), 其实是回到 master 分支，再开一个分支，而不会 造成因当前修改过大，短时间无法发布 bug fix 版本。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意："),s("code",[t._v("每次建立分支，或者切换分支前，都需要把当前的修改提交，否则切换到其他分支也能 看到这些未提交的修改，working directory 下的文件不会恢复到指定文档的版本.")])])]),t._v(" "),s("p",[t._v("建立分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("切换到指定分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("Merge")]),t._v(" "),s("p",[t._v("先切换到需要合并到的分支，例如 master, 然后 merge")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("如果有冲突，使用 mergetool")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" mergetool\n")])])]),s("p",[t._v("再手动提交修改")]),t._v(" "),s("p",[t._v("删除无用分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("列出所有分支，并显示当前所处分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -v\n")])])]),s("p",[t._v("列出所有分支的关系")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph --all --decorate --oneline\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph --all --decorate --simplify-by-decoration\n")])])]),s("p",[t._v("列出指定分支的关系")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph --all --decorate --simplify-by-decoration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://blog.jobbole.com/76867/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git工作流指南：Gitflow工作流"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"保留-丢弃当前分支修改并切换至其他分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保留-丢弃当前分支修改并切换至其他分支"}},[t._v("#")]),t._v(" 保留/丢弃当前分支修改并切换至其他分支")]),t._v(" "),s("p",[t._v("笔者在本地终端进行 git 工作目录的相关处理时，遇到由于某种情况需要使用 git checkout 命令切换到其他分支的情景。此时，若已经对当前分支做了一定的修改，则直接切换分支时 git 会提示错误信息。本文即总结下笔者目前了解和使用的 git 切换到其他分支冲突时的解决方案。")]),t._v(" "),s("p",[t._v("问题")]),t._v(" "),s("p",[t._v("当本地遇到特殊情况，需要切换到其他分支时，当前分支可能会存在以下两种可能：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("//"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 对当前分支并未进行任何修改，从而可以直接使用 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 命令切换到其他分支。\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("        //切换到 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" 分支\n　　"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 若当前的分支已经做了一定的修改，则直接进行分支切换时，git 会产生如下错误信息。这是由于已经对当前分支进行了修改，但尚未保存而导致的。\n\n　　error: Your "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" changes to the following files would be overwritten by checkout "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" xxxx　\n\n　　Please commit your changes or stash them before you switch branches\n")])])]),s("p",[t._v("下面描述当前分支存在修改时，切换到其他分支的解决方案。具体而言，选择包括简单的丢弃当前分支的修改和保存当前分支信息，待其他分支完成后再进行恢复等，用户可根据不同的需要选用不同的方案。")]),t._v(" "),s("h3",{attrs:{id:"丢弃本分支的修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#丢弃本分支的修改"}},[t._v("#")]),t._v(" 丢弃本分支的修改")]),t._v(" "),s("p",[t._v("下面的方法直接将当前分支相对上一次提交时的修改丢弃，从而可以从当前分支切换至其他分支，主要适合于对当前分支的改动较少，且不存在丢弃修改产生的问题的情况。用户可以使用不同的命令实现丢弃本地分支的修改。")]),t._v(" "),s("p",[t._v("通过 git checkout -f 命令强制切换分支")]),t._v(" "),s("p",[t._v("当用户对当前分支的修改不是特别重要或觉得没有保留的必要时，可以使用 git checkout 命令强制切换到其他分支。再切换回该分支时，会直接退回到该分支上一次提交时的数据版本。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -f "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("        //强制切换至 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" 分支，丢弃当前分支的修改\n")])])]),s("p",[t._v("通过 git reset --hard 回退至某次提交时的数据")]),t._v(" "),s("p",[t._v("如果只需要保持当前分支上一次提交时的数据，而不需要目前添加的任何修改，可以使用 git log 查看当前分支的提交记录。再通过 git reset --hard 命令将当前分支回退到前一次提交时的数据，此时当前分支针对上一次提交的修改均被抹除，注意 git reset --hard 在运行时不会有提示，所以使用前请保证新增的修改是可丢弃的。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("　　通过 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log 查看当前分支的提交记录。\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log        //当前分支的提交记录，信息包括提交对应的 哈希值 作者 邮箱 日期 描述 等\n　　通过 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard 命令回退到某一次提交的版本，上述命令只需要使用特定提交的哈希值的开始若干位作为参数，即可退回该提交时的数据。\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard a13f52f3        //当前分支数据重置到哈希值开始部分为 a13f52f3 的提交的数据，git reset --hard 参数为某次提交时的哈希值的开始部分\n　　当重置完成后，当前分支的数据即为被 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" 记录的未经修改的数据，此时可以直接通过 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 命令切换到其他分支，而不会再产生报错。\n\n　　\n　　通过 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -- 命令忽略文件的修改\n")])])]),s("p",[t._v("当使用 git status 查看当前分支的文件状态时，对于不同的文件状态，git status 会提示该状态下的文件可以使用的对应 git 命令，如下图所示。")]),t._v(" "),s("p",[t._v("可以看到，对于处于 Changes to be commited 状态的文件( 该状态的文件在使用 git commit 命令时即被提交 )，可以通过 git reset HEAD 命令将文件从 Changes to be commited 状态退出。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD test.txt        //将 test.txt 从 Changes to be committed 状态退出\n")])])]),s("p",[t._v("对于 Changes not staged for commit 状态的文件，表示这些文件虽然被修改，但并没有被加入 Changes to be commited 状态，即使用 git commit 命令提交时，这些修改不会被记录。针对这类文件可以有两种选择。可以使用 git add 命令将这些修改放入 Changes to be committd 状态，或者通过 git checkout -- 命令忽略该文件的修改，使其回退到上一次提交时的状态。( git 中不同文件的状态可以参见笔者的另一篇笔记git 学习记录—— git 中的仓库、文件状态、修改和提交操作等 )")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" test.txt                //将 test.txt 文件加入 Changes to be committed 状态,在使用 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit 命令时上述修改即被提交\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -- test.txt        //丢弃对 test.txt 的修改，其内容回退到上一次提交时的状态\n　　无法直接切换其他分支的原因即是存在未被保存的修改。此时若想要丢弃当前分支的修改，直接使用 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -- 命令将文件修改丢弃即可。该方法主要适用于产生的改动比较少且相对不重要的情况。\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -- test.txt        //丢掉 test.txt 文件新增的修改 \n")])])]),s("h3",{attrs:{id:"保留当前分支的修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保留当前分支的修改"}},[t._v("#")]),t._v(" 保留当前分支的修改")]),t._v(" "),s("p",[t._v("另外一种进行切换的选择是先将当前分支的修改保存，再切换到其他分支，这样在其他分支的任务完成后，重新切换至当前分支时，可以继续当前分支的工作。")]),t._v(" "),s("p",[t._v("直接提交当前分支")]),t._v(" "),s("p",[t._v("最简单粗暴的方法即通过 git commit 命令将当前分支的修改进行提交。首先通过 git status 命令查看当前分支各个文件的状态，git status 命令还会显示不同文件状态下 git 可执行的命令，用户可以直接参考。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status              //当前分支各文件的状态\n　　通过 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 命令将修改后的文件转化为 staged 状态，即文件的修改将处于 Changes to be committed 状态，再通过 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit 命令将本分支的修改提交。\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" test.txt        //将此时的 test.txt 文件添加至 Changes to be committed 状态\n　　在所需的修改均加入 Changes to be committed 状态后，可以通过 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit 命令将本分支的修改提交。不需要的修改通过上文提到的 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -- 命令重置即可。\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description for this commit"')]),t._v("    //提交本次修改\n\n")])])]),s("p",[t._v("将当前分支修改暂存")]),t._v(" "),s("p",[t._v("在任务推进过程中，可能遇到需要切换到其他分支进行处理的情况。但是对应的，对于当前分支的修改可能并不足以达到需要进行一次提交的程度，此时更合适的方案是将本分支修改暂存，然后切换到其他分支进行工作，待其他分支的任务完成后，再切换回本分支，并将暂存的方案恢复，进而继续本分支的修改。")]),t._v(" "),s("p",[t._v('git 中提供 git stash 命令来完成上述功能，也就是上文提到的错误提示中 "Please commit your changes or stash them before you switch branches" 中所提到的 stash 修改的方案。')]),t._v(" "),s("p",[t._v("### 暂存修改")]),t._v(" "),s("p",[t._v("通过 git stash 命令将当前分支的修改暂存。经过 git stash 命令暂存修改的数据后，再使用 git status 命令可以看到文件的状态均处于未修改的状态( 而不再是修改未提交状态 )。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("git stash              //暂存本分支的修改\n")])])]),s("p",[t._v('如笔者通过 git stash 命令，会显示对应的 "Saved working directory and index state WIP on master :xxxxxxx" 信息。用户可以多次使用 git stash 命令，暂存的状态会以栈的形式存放。')]),t._v(" "),s("p",[t._v("查看暂存信息")]),t._v(" "),s("p",[t._v("可以通过命令 git stash list 查看已经暂存的数据。 可以看到暂存的数据通过 stash@{n} 的形式索引已经存储的修改数据。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("git stash list        //显示所有 stash 的数据\n")])])]),s("p",[t._v("恢复修改")]),t._v(" "),s("p",[t._v("当在其他分支的任务完成切换回当前分支后，可以使用 git stash apply 命令恢复之前被暂存的数据。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("git stash apply                //恢复最近一次暂存的修改\ngit stash apply stash@{2}      //恢复索引 stash@{2} 对应的暂存的修改，索引可以通过 git stash list 进行查看\n")])])]),s("p",[t._v('这里需要注意的是，通过 git stash apply 命令只会将暂存的数据恢复至 "Changes not staged for committed" 状态，即使之前修改状态中已经有文件处于 staged 状态( Changes to be committed ).为了 git 能够将文件尽可能恢复至暂存之前的状态，可以加入 --index 参数。')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("git stash apply --index        //在恢复暂存数据时尽量恢复至原状态( 已经 staged 状态的文件仍恢复为 staged 状态 )\n")])])]),s("p",[t._v("删除修改")]),t._v(" "),s("p",[t._v("可以通过 git stash pop 或者 drop 命令删除对应的缓存数据。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("git stash drop stash@{1}        //删除 stash@{1} 分支对应的缓存数据\ngit stash pop                   //将最近一次暂存数据恢复并从栈中删除\n")])])]),s("p",[t._v("git stash 将用户做过的修改存放在本次 git stash 产生的暂存数据中，并将已经修改的文件恢复至未修改状态。当用户恢复暂存数据时，则将上述修改应用到当前分支上。")]),t._v(" "),s("p",[t._v("在本文的情景中，即将当前分支的修改通过 git stash 保存，此时当前分支恢复至未被修改之前的状态，而修改被 git stash 以栈的方式保存，可通过索引的方式访问。用户此时可以没有错误的切换至其他分支( 文件均处于未修改状态 )，待其他分支的任务完成后，再切换回本分支。此时通过 git stash apply 将被暂存的修改应用到当前分支，则当前分支的数据即被恢复至离开当前分支前的状态。")]),t._v(" "),s("p",[t._v("从原理也可以看出，git stash apply 实际是可以应用到任意分支的，此时执行的操作是将 git stash 保存的修改合并到 git stash apply 时用户所在的分支和文件，当合并存在问题时，git 会产生报错。")]),t._v(" "),s("p",[t._v("参考资料")]),t._v(" "),s("p",[t._v("Git tools —— Stashing")]),t._v(" "),s("p",[t._v("撤销修改 —— 廖雪峰的网站")]),t._v(" "),s("p",[t._v("git 学习记录—— git 中的仓库、文件状态、修改和提交操作等")])])}),[],!1,null,null,null);a.default=n.exports}}]);