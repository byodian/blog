## npm
npm install --save-dev webpack
npm i -D webpack

npm install nodemon -g 

## tree

### install

```npm
npm install -g tree-cli
```

### usage

`tree --help`

使用 options 定义输出

```
tree -l 2 -o out.txt
```

### Options

- --help: outputs a verbose usage listing.
- --version: outputs the version of tree-cli.
- --debug: show debug info.
- --fullpath: prints the full path prefix for each file.
- --ignore: ignores directory or file you specify - accepts arrays as comma-delimited strings: `'node_modules/, .git/, .gitignore'`
- --link: follows symbolic links if they point to directories, as if they were directories. Symbolic links that will result in recursion are avoided when detected.
- --noreport: omits printing of the file and directory report at the end of the tree listing and omits printing the tree on console.
- -a: all files are printed. By default tree does not print hidden files (those beginning with a dot '.'). In no event does tree print the file system constructs '.' (current directory) and '..' (previous directory).
- -d: list directories only.
- -f: append a '/' for directories, a '=' for socket files and a '|' for FIFOs.
- -i: makes tree not print the indentation lines, useful when used in conjunction with the -f option.
- -l: max display depth of the directory tree.
- -o: send output to filename.