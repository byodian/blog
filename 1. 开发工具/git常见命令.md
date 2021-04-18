## 版本回退

命令 | 信息
------------ | -------------
版本回退 | git reset --hard HEAD^
暂存区退回工作区 | git reset HEAD &lt;file&gt; /  git restore &lt;file&gt;
丢弃工作区修改 | git checkout -- &lt;file&gt; / git restore --staged &lt;file&gt;

## 分支操作

命令 | 信息
------------ | -------------
创建分支 | git branch &lt;name&gt;
切换分支 | git checkout &lt;name&gt;
创建并切换分支 | git checkout -b &lt;name&gt;
删除分支 | git branch -d &lt;name&gt;
合并分支（快速合并） | git merge &lt;branch name&gt;
合并分支（普通模式）有历史合并记录 | git merge --no-ff &lt;branch name&gt;

## 标签
命令 | 信息
------------ | -------------
新建标签  默认为 HEAD，或指定一个 commit id | git tag &lt;tag name&gt;
查看所有标签 | git tag
查看标签信息 | git show &lt;tagname&gt;
指定标签信息 | git tag -a &lt;tagname&gt; -m "信息"
推送标签到远程仓库 | git push origin &lt;tagname&gt;
推送所有标签到远程 | git push origin --tags
删除本地标签 | git tag -d &lt;tagName&gt;
删除远程仓库标签 | git push origin :refs:tags/&lt;tagname&gt;

## 修改提交信息
命令 | 信息
------------ | -------------
修改最近一次 commit | git commit --amend
修改旧的 commit | git rebase -i &lt;parent commit&gt;  选择参数 **r**
修改第一次提交 | git rebase -i --root
整合连续多条 commit | git rebase -i &lt;parent commit&gt;  选择参数 **s**

## git config
命令 | 信息
------------ | -------------
本地配置 | git config --local
全局配置 | git config --global
系统配置 | git config --system
配置用户名 | git config --global user.name 'name'
配置用户邮箱 | git config --global user.email 'email'

## 版本变更
命令 | 信息
------------ | -------------
变更历史 | git log
查看分支合并图 | git log --graph
查看分支变更历史 | git log <分支名>
 | git log --all
 | git log --oneline
 | git log -n4

## 比较差异
命令 | 信息
------------ | -------------
暂存区和 HEAD | git diff --cached
工作区和暂存区 | git diff / git diff -- &lt;file&gt;
不同 commit | git diff &lt;commit ID&gt; &lt;commit ID&gt;

## 添加紧急任务
命令 | 信息
------------ | -------------
保存工作区修改信息，并清除工作树 | git stash
列出储存的 stash | git stash list
恢复 | git stash pop / git stash apply

## 其他

命令 | 信息
------------ | -------------
已跟踪文件提交到暂存区 | git add -u
打开图形化界面 | gitk -all
变更文件名 |　git mv 
删除文件并提交删除信息到暂存区 | git rm &lt;file&gt;
ssh-key 生成密钥 | ssh-keygen -t rsa -C "youremail"

SSH Key 秘钥对: id_rsa 和 id_rsa.pub

## git 工作区目录
...