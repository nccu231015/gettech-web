"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

function Header({headline, title}) {
 
  return (
    <div>
      <div>{headline}</div>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
