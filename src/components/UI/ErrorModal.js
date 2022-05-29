import React from "react";

import Card from "./Card";
import Button from "./Button";

import styled from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <div>
      <div className={styled.backdrop} onClick={onConfirm} />
      <Card className={styled.modal}>
        <header className={styled.header}>
          <h2>{title}</h2>
        </header>
        <div className={styled.content}>
          <p>{message}</p>
        </div>
        <footer className={styled.actions}>
          <Button onClick={onConfirm}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
