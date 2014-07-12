macro ls {
    rule {$dir:expr} => {
        fs.readdirSync($dir);
    }

    rule {} => {
        fs.readdirSync(__dirname);
    }
}
