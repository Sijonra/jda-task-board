import { FC } from "react";

import styles from "./BoardColumn.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Card from "../Card/Card";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";

import { TCardList } from "../../@types/types";
import { dragFunctions } from "../../functions/dragFunctions";
import { useDrag } from "../Context/DragContext";

interface BoardColumnProps {
	cards: TCardList;
	onCardDelete: (cardId: number) => void;
	id: number;
}

const BoardColumn: FC<BoardColumnProps> = ({cards, onCardDelete, id}) => {

	const { currentDragCardId } = useDrag();

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		// console.log(e);
		dragFunctions.onDragOverHandler(id);
	};

	
	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		// if (currentDragCardId !== undefined) {
		// 	dragFunctions.onDragDropHandler(currentDragCardId, id);
		// }
		console.log();
		dragFunctions.onDragDropHandler(currentDragCardId, id);
	};

	return (
		<div 
			onDragOver={handleDragOver}
			onDragEnter={(e)=> e.preventDefault()}
			onDrop={handleDrop}
			draggable={true}
			className={cx("board-column")}
		>
			{
				cards.map((card)=>{
					return(
						<Card currentColumnId={id} cardId={card.id} draggable={true} key={card.id} elevation={3} className={cx("board-column__card", "board-card")}>
							{card.content}
							<Badge color="green" type="badge" theme="solid" text={card.id.toString()} className={cx('board-card__badge')} />
							<Button onClick={()=>{onCardDelete(card.id)}} type="regular" className={cx('board-card__close')}>✖</Button>
						</Card>
					)
				})
			}
		</div>
	);
};

export default BoardColumn;
