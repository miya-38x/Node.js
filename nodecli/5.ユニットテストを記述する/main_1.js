const program = require("commander");
const fs = require("fs");
const md2html = require("./md2html");

// �t�@�C���p�X���R�}���h��������擾
program.option("--gfm" ,"GFM��L���ɂ���");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
	gfm : false,
	...program.opts(),
};

// �t�@�C����ǂݍ���
fs.readFile(filePath ,{encoding : "utf8"} ,(err,file) =>
	{
		if(err) {
			console.error(err.message);
			process.exit(1);
			return;
		}
		
		// md2html.js���g����HTML������ɕϊ�
		const html =md2html(file ,cliOptions);
		console.log(html);
	}
);