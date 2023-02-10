namespace $.$$ {
	export class $examples_xo_cell extends $.$examples_xo_cell {
		@$mol_mem
		touched(next?: Touches) {
			if (undefined !== next) return next;
			return Touches.unset;
		}
		@$mol_mem
		wincell(next?: boolean) {
			if (undefined !== next) return next;
			return false;
		}
		@$mol_mem
		currentView() {
			if (this.touched() !== Touches.unset) {
				return Touches.x === this.touched()
					? this.xView()
					: this.oView();
			} else if (this.hovered() && this.currentStep() !== Touches.unset) {
				return Touches.x === this.currentStep()
					? this.xView()
					: this.oView();
			}
			return null;
		}

		@$mol_mem
		class() {
			return this.wincell()
				? "wincell"
				: this.touched() === Touches.unset
				? "selectable"
				: "";
		}
		@$mol_mem
		hovered(next?: boolean) {
			if (undefined !== next) return next;
			return false;
		}
		public onHover() {
			this.hovered(true);
		}
		public onHoverEnd() {
			this.hovered(false);
		}
		public onClick() {
			if(this.currentStep() !== Touches.unset)
			this.onStep(this);
		}
		public onStep(cell: $examples_xo_cell) {}
	}
}
