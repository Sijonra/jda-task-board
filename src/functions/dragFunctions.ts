import { TDragHandlerFunctions } from "../@types/types";

export const onDragHandlerFunctions: TDragHandlerFunctions = {
	onDragStartHandler: () => {
		console.log('drag START')
	},
	onDragLeaveHandler: () => {
		console.log('drag LEAVE')
	},
	onDragEndHandler: () => {
		console.log('drag END')
	},
	onDragOverHandler: () => {
		console.log('drag OVER')
	},
	onDragDropHandler: () => {
		console.log('drag DROP')
	}
} 
