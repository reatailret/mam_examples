namespace $.$$ {
	export class $examples_xo extends $.$examples_xo {
		private matrix: Array<Touches> = [];

		isEndGame(): Array<number> | "no_empty" | false {
			if (
				this.matrix[0] !== Touches.unset &&
				this.matrix[4] !== Touches.unset &&
				this.matrix[8] !== Touches.unset &&
				this.matrix[0] === this.matrix[4] &&
				this.matrix[4] === this.matrix[8]
			) {
				return [0, 4, 8];
			}
			if (
				this.matrix[2] !== Touches.unset &&
				this.matrix[4] !== Touches.unset &&
				this.matrix[6] !== Touches.unset &&
				this.matrix[2] === this.matrix[4] &&
				this.matrix[4] === this.matrix[6]
			) {
				return [2, 4, 6];
			}
			for (let index = 0; index < 3; index++) {
				if (
					this.matrix[index] !== Touches.unset &&
					this.matrix[index + 3] !== Touches.unset &&
					this.matrix[index + 6] !== Touches.unset &&
					this.matrix[index] === this.matrix[index + 3] &&
					this.matrix[index + 3] === this.matrix[index + 6]
				) {
					return [index, index + 3, index + 6];
				}
			}
			for (let index = 0; index < this.matrix.length; index += 3) {
				if (
					this.matrix[index] !== Touches.unset &&
					this.matrix[index + 1] !== Touches.unset &&
					this.matrix[index + 2] !== Touches.unset &&
					this.matrix[index] === this.matrix[index + 1] &&
					this.matrix[index + 1] === this.matrix[index + 2]
				) {
					return [index, index + 1, index + 2];
				}
			}
			const noFilled = this.matrix.find((el) => el === Touches.unset);
			if (!noFilled) return "no_empty";
			return false;
		}
		auto() {
			if (!this.cells().length) {
				const s = [];
				for (let index = 0; index < 9; index++) {
					const cell = new $examples_xo_cell();

					cell.onStep = (val) => this.onStep(val);
					cell.currentStep = () => this.currentStep();
					cell.xView = this.xView;
					cell.oView = this.oView;
					this.matrix.push(Touches.unset);
					s.push(cell);
				}
				this.cells(s);
				this.newGame();
			}
		}
		public newGame() {
			this.currentStep(Math.random() > 0.5 ? Touches.o : Touches.x);
			for (const cell of this.cells()) {
				cell.touched(Touches.unset);
			}
			this.matrix.every((el, index, ar) => (ar[index] = Touches.unset));
		}
		@$mol_mem
		public cells(next?: Array<$examples_xo_cell>) {
			if (undefined !== next) return next;
			return [];
		}

		@$mol_mem
		currentStep(next?: Touches) {
			if (undefined !== next) return next;
			return Touches.unset;
		}

		onStep(cell: $examples_xo_cell) {
			cell.touched(this.currentStep());
			this.matrix[this.cells().indexOf(cell)] = this.currentStep();
			const endGame = this.isEndGame();
			if (endGame === "no_empty") {
				this.currentStep(Touches.unset);
				for (const cell of this.cells()) {
					cell.wincell(true);
				}
				$$.$mol_wait_timeout(1000);
				for (const cell of this.cells()) {
					cell.wincell(false);
				}
				this.newGame();
			} else if (false === endGame) {
				this.currentStep(
					this.currentStep() === Touches.o ? Touches.x : Touches.o
				);
			} else {
				this.currentStep(Touches.unset);
				for (const cellIdx of endGame) {
					this.cells()[cellIdx].wincell(true);
				}
				$$.$mol_wait_timeout(1000);
				for (const cellIdx of endGame) {
					this.cells()[cellIdx].wincell(false);
				}
				this.newGame();
			}
		}

		@$mol_mem
		nextPlayer() {
			return this.currentStep() === Touches.x
				? this.xView()
				: this.oView();
		}
	}

	export enum Touches {
		"o",
		"x",
		"unset",
	}
}
