import { FC } from "react";

import styles from "./BoardColumn.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Card from "../Card/Card";

const BoardColumn: FC = () => {
	return (
		<div className={cx("board-column")}>
			<Card elevation={3} className={cx("board-column__card")}>
				Card
			</Card>
			<Card elevation={3} className={cx("board-column__card")}>
				Card
			</Card>
			<Card elevation={3} className={cx("board-column__card")}>
				Card
			</Card>
			<Card elevation={3} className={cx("board-column__card")}>
				Card
			</Card>
		</div>
	);
};

export default BoardColumn;
