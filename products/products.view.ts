namespace $.$$ {
  export class $examples_products extends $.$examples_products {
    constructor() {
      super();
    }

	@$mol_mem
	pages_visible(): readonly any[]
	{
		
		const pages : Array<$mol_view> = [this.tablepage()];
		const dict = $mol_state_arg.dict();
		if(dict.examples_products_viewpage === 'edit')
		{
			pages.push(this.editpage())
		}
		
		
		return pages
	}
	
	editCallback(id:string)
	{
		this.bring();
	}
	form_factory(): any
	{
		return new $examples_products_editform()
	}
   
  }

  
}
