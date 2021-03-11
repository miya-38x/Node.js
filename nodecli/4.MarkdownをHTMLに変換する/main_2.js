const program = require("commander");
const fs = require("fs");
const marked = require("marked");

// �t�@�C���p�X���R�}���h��������擾
program.parse(process.argv);
const filePath = program.args[0];

// �t�@�C����ǂݍ���
fs.readFile(filePath ,{encoding : "utf8"} ,(err,file) =>
	{
		if(err) {
			console.error(err.message);
			process.exit(1);
			return;
		}
		
		// markDown�t�@�C����HTML������ɕϊ�
		const html = marked(file ,{gfm : false});
		console.log(html);
	}
);