// Chiel Kunkels (@chielkunkels)
'use strict';

// required modules
var editorBase = require('./base'),
	event = require('./../event/model');

// exposed
var editor = Object.merge({}, editorBase, {
	/**
	 * Build up the editor
	 */
	build: function(){
		this.frame = new Element('div.editor');
		this.textarea = new Element('textarea', {
			name: 'markup'
		});
		this.frame.adopt(this.textarea).inject(this.wrapper);
		var options = Object.append({mode: 'text/html'}, this.mirrorOptions);
		this.textarea.addClass('is-hidden');
		this.codemirror = CodeMirror(this.frame, options);
	}
});

module.exports = editor;

