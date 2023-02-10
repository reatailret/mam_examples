namespace $ {
	export class $examples_xo_cell extends $mol_view {
		
		/**
		 * ```tree
		 * currentStep null
		 * ```
		 */
		currentStep() {
			return null as any
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
		 * attr * class <= class
		 * ```
		 */
		attr() {
			return {
				class: this.class()
			}
		}
		
		/**
		 * ```tree
		 * event *
		 * 	mouseover?val <=> onHover?val
		 * 	mouseout?val <=> onHoverEnd?val
		 * 	click?val <=> onClick?val
		 * ```
		 */
		event() {
			return {
				mouseover: (val?: any) => this.onHover(val),
				mouseout: (val?: any) => this.onHoverEnd(val),
				click: (val?: any) => this.onClick(val)
			}
		}
		
		/**
		 * ```tree
		 * sub / <= currentView
		 * ```
		 */
		sub() {
			return [
				this.currentView()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * class \
		 * ```
		 */
		class() {
			return ""
		}
		
		/**
		 * ```tree
		 * currentView null
		 * ```
		 */
		currentView() {
			return null as any
		}
	}
	
}

