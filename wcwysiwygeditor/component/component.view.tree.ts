namespace $.$$ {
	export class $examples_wcwysiwygeditor_component extends $.$examples_wcwysiwygeditor_component {
		auto(){
			import('wc-wysiwyg-editor').then(esm => {
				esm.define();
			});
			import('wc-wysiwyg-editor/dist/sass/wc-wysiwyg.css');
			import('wc-wysiwyg-editor/dist/sass/content.css');
		}
	}
	
}

