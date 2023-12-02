import { FC } from "react";

import styles from "./BoardInput.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import {useState} from 'react';

import Input from "../Input/Input";
import Button from "../Button/Button";

const BoardInput: FC = () => {

	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
		setInputValue(event.target.value);
	}

	return (
		<div className={cx("board-input")}>
			<Input
				onChange={handleInputChange}
				value={inputValue}
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
