import React, { useEffect, useState } from "react";
import style from "./Button.module.scss";

function Button({ btnText }) {
  return (
    <div className={style["button"]}>
      <a ><span>{btnText}</span><i></i></a>
    </div>
  );
}

export default Button;
