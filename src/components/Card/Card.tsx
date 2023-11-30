import { FC } from "react";
import style from "./Card.module.scss";

interface CardProps {
  elevation: number;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({
  elevation,
  title,
  subtitle,
  children,
  className,
}) => {
  return (
    <>
      <div
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
