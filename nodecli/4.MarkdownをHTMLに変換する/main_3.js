const program = require("commander");
const fs = require("fs");
const marked = require("marked");

// �t�@�C���p�X���R�}���h��������擾
program.option("--gfm" ,"GFM��L���ɂ���");
program.parse(process.argv);

const options = program.opts();
console.log(options.gfm);