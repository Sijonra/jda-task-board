import { FC } from "react";

import styles from "./BoardInput.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Input from "../Input/Input";
import Button from "../Button/Button";

const BoardInput: FC = () => {
	return (
		<div className={cx("board-input")}>
			<Input
				className={cx("board-input__input")}
				placeholder="add new task"
			/>
			<Button
				type="minimal"
				plusLeft={true}
				className={cx("board-input__button")}
			>
				Add
			</Button>
		</div>
	);
};

export default BoardInput;
