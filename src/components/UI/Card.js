import styled from "./Card.module.css";

const Card = ({ children, className }) => {
  return <div className={`${styled.card} ${className}`}>{children}</div>;
};

export default Card;
