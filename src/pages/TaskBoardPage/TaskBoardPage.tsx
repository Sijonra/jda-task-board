import { FC } from "react";

import styles from "./TaskBoardPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import BoardInput from "../../components/BoardInput/BoardInput";
import BoardColumn from "../../components/BoardColumn/BoardColumn";

const TaskBoardPage: FC = () => {
	return (
		<div className={cx("task-board")}>
			<div className={cx("task-board__input")}>
				<BoardInput />
			</div>
			<div className={cx("task-board__columns")}>
				<BoardColumn />
				<BoardColumn />
				<BoardColumn />
			</div>
		</div>
	);
};

export default TaskBoardPage;
