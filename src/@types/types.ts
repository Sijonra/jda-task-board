interface TCard {
	id: number;
	columnId: number;
	content: string;
}

type TCardList = TCard[];

export type { TCard, TCardList };
