interface TCard {
	id: number;
	columnId: number;
	content: string;
}

type TCardList = TCard[];

type TDragHandlerFunctions = {
	onDragStartHandler: () => void;
	onDragLeaveHandler: () => void;
	onDragEndHandler: () => void;
	onDragOverHandler: () => void;
	onDragDropHandler: () => void;
};

export type { TCard, TCardList, TDragHandlerFunctions };
