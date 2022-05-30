import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import styled from "./ErrorModal.module.css";

const Backdrop = ({ onConfirm }) => {
  return <div className={styled.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
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
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
