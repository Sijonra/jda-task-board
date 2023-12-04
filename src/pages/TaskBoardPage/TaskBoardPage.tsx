import { FC, useState, useMemo } from "react";

import styles from "./TaskBoardPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import BoardInput from "../../components/BoardInput/BoardInput";
import BoardColumn from "../../components/BoardColumn/BoardColumn";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { TCardList } from "../../@types/types";

const cardsList: TCardList = [
	{
		id: 1,
		columnId: 0,
		content: "hello",
	},
	{
		id: 2,
		columnId: 0,
		content: "world",
	},
	{
		id: 3,
		columnId: 0,
		content: "cringe",
	},
	{
		id: 4,
		columnId: 1,
		content: "inProgress",
	},
	{
		id: 5,
		columnId: 2,
		content: "Done",
	},
	{
		id: 6,
		columnId: 2,
		content: "Done",
	},
];

const TaskBoardPage: FC = () => {
	const [cards, setCards] = useState<TCardList>(cardsList);
	const [modalWindowIsActive, setModalWindowIsActive] =
		useState<boolean>(false);
	const [deletingCardId, setDeletingCardId] = useState<number | null>(null);

	const closeModalWindowAccept = () => {
		if (deletingCardId !== null) {
			removeCard(deletingCardId);
		}
		setModalWindowIsActive(false);
	};

	const closeModalWindowDecline = () => setModalWindowIsActive(false);

	const onCardDelete = (cardId: number) => {
		setDeletingCardId(cardId);
		setModalWindowIsActive(true);
	};

	const removeCard = (cardId: number) => {
		const newCards = cards.filter((card) => card.id !== cardId);
		newCards.map((card, index) => (card.id = index + 1));
		setCards(newCards);
	};

	const toDoCards = useMemo(() => {
		return cards.filter((card) => card.columnId === 0);
	}, [cards]);

	const inProgressCards = useMemo(() => {
		return cards.filter((card) => card.columnId === 1);
	}, [cards]);

	const doneCards = useMemo(() => {
		return cards.filter((card) => card.columnId === 2);
	}, [cards]);

	return (
		<div className={cx("task-board")}>
			{modalWindowIsActive && (
				<ModalWindow
					closeModalWindowAccept={closeModalWindowAccept}
					closeModalWindowDecline={closeModalWindowDecline}
				/>
			)}
			<div className={cx("task-board__input")}>
				<BoardInput setCards={setCards} cards={cards} />
			</div>
			<div className={cx("task-board__columns")}>
				<BoardColumn
					allCards={cards}
					setCards={setCards}
					id={0}
					cards={toDoCards}
					onCardDelete={onCardDelete}
				/>
				<BoardColumn
					allCards={cards}
					setCards={setCards}
					id={1}
					cards={inProgressCards}
					onCardDelete={onCardDelete}
				/>
				<BoardColumn
					allCards={cards}
					setCards={setCards}
					id={2}
					cards={doneCards}
					onCardDelete={onCardDelete}
				/>
			</div>
		</div>
	);
};

export default TaskBoardPage;
