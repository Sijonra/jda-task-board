import { FC } from "react";
import style from "./Card.module.scss";
import { dragFunctions } from "../../functions/dragFunctions";
// import { TCard } from "../../@types/types";
import { useDrag } from "../Context/DragContext";

interface CardProps {
	elevation: 1 | 2 | 3;
	title?: string;
	subtitle?: string;
	children?: React.ReactNode;
	className?: string;
	draggable?: boolean;
	cardId?: number;
	currentColumnId: number;
}

const Card: FC<CardProps> = ({
	elevation,
	title,
	subtitle,
	children,
	draggable,
	className,
	cardId,
	currentColumnId,
}) => {

	const { setCurrentDragCardId } = useDrag();

	const handleDragStart = () => {
		console.log(cardId);
			setCurrentDragCardId(cardId);
			dragFunctions.onDragStartHandler(cardId);
		// dragFunctions.onDragStartHandler(card);
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		dragFunctions.onDragOverHandler(currentColumnId);
	};

	return (
		<>
			<div
				onDragStart={handleDragStart}
				onDragLeave={()=>{
					dragFunctions.onDragLeaveHandler()
				}}
				onDragOver={handleDragOver}
				// onDrop={()=>{
				// 	console.log(currentColumnId);
				// 	dragFunctions.onDragDropHandler(currentColumnId)
				// }}
				onDragEnd={()=>{
					dragFunctions.onDragEndHandler()
				}}
				draggable={draggable}
				className={
					style["card"] +
					" " +
					style["card__" + elevation.toString()] +
					" " +
					className
				}
			>
				<h3 className={style["card__title"]}>{title}</h3>
				<h5 className={style["card__subtitle"]}>{subtitle}</h5>
				<div className={style["card__content"]}>{children}</div>
			</div>
		</>
	);
};

export default Card;
