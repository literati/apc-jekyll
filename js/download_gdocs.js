var files = [
	'https://drive.google.com/open?id=1B0NLG5UbTMA89oGxKvjEWBFQEmoG91zYRsq6bOCAn1M&authuser=0', 
	'https://drive.google.com/open?id=1Hdz7FCjit531mOxMkwtT2lxwI13z-NeADCZ_v1AyXAQ&authuser=0', 
	'https://drive.google.com/open?id=1QYZepACJRp3t8MYzPjtZxuQ2jvB5GoTtr8rXgljuWtc&authuser=0', 
	'https://drive.google.com/open?id=1j23H0Ss1pd6WAljd2Tud_b014gHxg3vXfXWLiWoRhBA&authuser=0', 
	'https://drive.google.com/open?id=18C_9cr3t2sfJBK4LYuDXG4s7jjsFzmaJiqyT_JlSciU&authuser=0', 
	'https://drive.google.com/open?id=1x7pvcUraKLgozlBVR9Pysry1JRaYsdLnrYzaughSgCk&authuser=0', 
	'https://drive.google.com/open?id=1hEAZp3VDmlIamOA8bnmVJ56csPOggRn_0WdBsFw3e0I&authuser=0',
	'https://drive.google.com/open?id=1c095BGMZHNdb97jfAxZJje5Oeiwlwz-rtCeSLehrDRA&authuser=0',
	'https://drive.google.com/open?id=1364ZLYS0yT5C0QrVEmw63Sn6BRiXRRg1rchcJowVf0I&authuser=0',
];

//console.log(g.issues[0].southern[0][3][0][8]);

var exec = require('child_process').exec, child;

for (var i = files.length - 1; i >= 0; i--) {
	files[i] = files[i].replace(/open\?/g,'document/export?format=docx&').replace(/&authuser=0/g,'').replace(/https/g,'http').replace('drive', 'docs');
}

for (var i = files.length - 1; i >= 0; i--) {
	console.log(i+" -- "+files[i]);

	child = exec('wget --no-check-certificate ' + '\'' + files[i] + '\''+' -O ' + files[i].replace('http://docs.google.com/document/export?format=docx&id=', '') + '.docx',

	function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    if(stderr !== null) {
	    	console.log('stderr: ' + stderr);
	    }

	    if (error !== null) {
	        console.log('exec error: ' + error);
	    }
	});

}
