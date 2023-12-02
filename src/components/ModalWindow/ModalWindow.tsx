import { FC } from "react";

import styles from "./modalWindow.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Button from "../Button/Button";
import Heading from "../Heading/Heading";

interface ModalWindowProps {

}

const ModalWindow: FC<ModalWindowProps> = () => {
	return (
		<div className={cx("modal")}>
			<div className={cx('modal-wrapper')}>
				<Heading type="oversized" className={cx('modal__warning')}>Are you sure, that you want delete this card?</Heading>
				<div className={cx('modal-buttons')}>
					<Button className={cx('modal-buttons__accept')} type="danger">Yes</Button>
					<Button className={cx('modal-buttons__decline')} type="regular">No</Button>
				</div>
			</div>
		</div>
	);
};

export default ModalWindow;
