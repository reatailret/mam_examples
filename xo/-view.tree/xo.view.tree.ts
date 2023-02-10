namespace $ {
	export class $examples_xo extends $mol_page {
		
		/**
		 * ```tree
		 * title \Игра "Крестики-нолики"
		 * ```
		 */
		title() {
			return "Игра \"Крестики-нолики\""
		}
		
		/**
		 * ```tree
		 * xView $mol_icon_close
		 * ```
		 */
		@ $mol_mem
		xView() {
			const obj = new this.$.$mol_icon_close()
			
			return obj
		}
		
		/**
		 * ```tree
		 * oView $mol_icon_refresh
		 * ```
		 */
		@ $mol_mem
		oView() {
			const obj = new this.$.$mol_icon_refresh()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Foot $mol_view sub /
		 * 	<= string
		 * 	<= nextPlayer
		 * ```
		 */
		@ $mol_mem
		Foot() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.string(),
				this.nextPlayer()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Body $mol_view sub / <= field
		 * ```
		 */
		@ $mol_mem
		Body() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.field()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * string \Next player
		 * ```
		 */
		string() {
			return "Next player"
		}
		
		/**
		 * ```tree
		 * cells /
		 * ```
		 */
		cells() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * field $mol_view sub <= cells
		 * ```
		 */
		@ $mol_mem
		field() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => this.cells()
			
			return obj
		}
	}
	
}

