const program = require("commander");
const fs = require("fs");

// �t�@�C���p�X���R�}���h��������擾
program.parse(process.argv);
const filePath = program.args[0];

// �t�@�C����ǂݍ���ŁA���e���o��
// fs.readFile(filePath ,(err,file) =>
fs.readFile(filePath ,{encoding : "utf8"} ,(err,file) =>
	{
		console.log(file);
	}
);