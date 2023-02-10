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
		 * tools /
		 * 	<= string
		 * 	<= nextPlayer
		 * ```
		 */
		tools() {
			return [
				this.string(),
				this.nextPlayer()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * body / <= fieldp
		 * ```
		 */
		body() {
			return [
				this.fieldp()
			] as readonly any[]
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
		 * nextPlayer null
		 * ```
		 */
		nextPlayer() {
			return null as any
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
		 * fieldp $mol_view sub <= cells
		 * ```
		 */
		@ $mol_mem
		fieldp() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => this.cells()
			
			return obj
		}
	}
	
}

