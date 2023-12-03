import { TDragFunctions } from "../@types/types";

export const dragFunctions: TDragFunctions = {
	onDragStartHandler: (card) => {
		console.log(card);
		console.log('drag START')
	},
	onDragLeaveHandler: () => {
		console.log('drag LEAVE')
	},
	onDragEndHandler: () => {
		console.log('drag END')
	},
	onDragOverHandler: (id) => {
		console.log('drag OVER ' + id)
	},
	onDragDropHandler: (currentDragCardId, columnId) => {
		console.log('CARD with id === ' + currentDragCardId + " DROP into column with id === " + columnId)
	}
} 
