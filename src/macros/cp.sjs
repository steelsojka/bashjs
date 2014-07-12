macro cp {
    rule {$path1:expr $path2:expr} => {
       fs.writeFileSync($path2, fs.readFileSync($path1));
    }
}
