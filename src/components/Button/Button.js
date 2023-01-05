import React from "react";
import { ButtonComponent } from "./styled";

function Button(props) {
  return (
    <ButtonComponent onClick={props.onClick}>{props.children}</ButtonComponent>
  );
}

export default Button;
