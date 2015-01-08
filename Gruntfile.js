module.exports = function(grunt) {

	//Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			multiple: {
				command: [
					//'brew install pandoc',
					'mkdir -p google_drive_data/google_raw/',
					'node google_drive_data/download_gdocs.js',
					'mv *.docx google_drive_data/google_raw/',
					'npm update',
					'bower update',
					//'cp bower_components/bootstrap/dist/css/bootstrap.min.css public/css/',
					'cp bower_components/bootstrap/dist/js/bootstrap.min.js public/js/',
					'cp bower_components/jquery/dist/jquery.min.js public/js/',
					'find google_drive_data/google_raw -name \*.docx -maxdepth 3 -type f -exec node node_modules/docxtohtml/docxtohtml.js {} ";"',
					'mv google_drive_data/google_raw/*.html google_drive_data/formatted_html/'
				].join('&&')
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');

	//Default Tasks
	grunt.registerTask('default', ['shell']);
};