import { FC } from "react";

import styles from "./BoardColumn.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Card from "../Card/Card";
import Badge from "../Badge/Badge";

import { TCardList } from "../../@types/types";

interface BoardColumnProps {
	cards: TCardList;
}

const BoardColumn: FC<BoardColumnProps> = ({cards}) => {
	return (
		<div className={cx("board-column")}>
			{
				cards.map((card)=>{
					return(
						<Card key={card.id} elevation={3} className={cx("board-column__card", "board-card")}>
							{card.content}
							<Badge color="green" type="badge" theme="solid" text={card.id.toString()} className={cx('board-card__badge')} />
						</Card>
					)
				})
			}
		</div>
	);
};

export default BoardColumn;
