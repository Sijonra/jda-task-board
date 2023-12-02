import { FC, useState, useMemo } from "react";

import styles from "./TaskBoardPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import BoardInput from "../../components/BoardInput/BoardInput";
import BoardColumn from "../../components/BoardColumn/BoardColumn";
import { TCardList } from "../../@types/types";

const cardsList: TCardList = [
	{
		id: 0,
		columnId: 0,
		content: 'hello'
	},
	{
		id: 1,
		columnId: 0,
		content: 'world'
	},
	{
		id: 2,
		columnId: 0,
		content: 'cringe'
	},
	{
		id: 3,
		columnId: 1,
		content: 'inProgress'
	},
	{
		id: 4,
		columnId: 2,
		content: 'Done'
	},
	{
		id: 5,
		columnId: 2,
		content: 'Done'
	},
]

const TaskBoardPage: FC = () => {

	const [cards, setCards] = useState<TCardList>(cardsList);

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
				<BoardColumn cards={toDoCards} />
				<BoardColumn cards={inProgressCards} />
				<BoardColumn cards={doneCards} />
			</div>
		</div>
	);
};

export default TaskBoardPage;
