import { FC, useState, useMemo } from "react";

import styles from "./TaskBoardPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import BoardInput from "../../components/BoardInput/BoardInput";
import BoardColumn from "../../components/BoardColumn/BoardColumn";
import { TCardList } from "../../@types/types";

const cardsList: TCardList = [
	{
		id: 1,
		columnId: 0,
		content: 'hello'
	},
	{
		id: 2,
		columnId: 0,
		content: 'world'
	},
	{
		id: 3,
		columnId: 0,
		content: 'cringe'
	},
	{
		id: 4,
		columnId: 1,
		content: 'inProgress'
	},
	{
		id: 5,
		columnId: 2,
		content: 'Done'
	},
	{
		id: 6,
		columnId: 2,
		content: 'Done'
	},
]

const TaskBoardPage: FC = () => {

	const [cards, setCards] = useState<TCardList>(cardsList);

	const onCardDelete = (cardId: number) =>{
		const newCards = (cards.filter(card => card.id !== cardId))
		newCards.map((card, index) => card.id = index + 1)
		setCards(newCards);
	}

	const toDoCards = useMemo(()=>{
		return cards.filter(card => card.columnId === 0)
	}, [cards])

	const inProgressCards = useMemo(()=>{
		return cards.filter(card => card.columnId === 1)
	}, [cards])

	const doneCards = useMemo(()=>{
		return cards.filter(card => card.columnId === 2)
	}, [cards])

	return (
		<div className={cx("task-board")}>
			<div className={cx("task-board__input")}>
				<BoardInput setCards={setCards} cards={cards}/>
			</div>
			<div className={cx("task-board__columns")}>
				<BoardColumn cards={toDoCards} onCardDelete={onCardDelete} />
				<BoardColumn cards={inProgressCards} onCardDelete={onCardDelete} />
				<BoardColumn cards={doneCards} onCardDelete={onCardDelete} />
			</div>
		</div>
	);
};

export default TaskBoardPage;
