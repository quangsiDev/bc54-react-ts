import React from "react";
import { I_PropsCard } from "./interface";

export default function Card(props: I_PropsCard) {
  console.log("😀 - Card - props", props);
  return <div>{props.title}</div>;
}
