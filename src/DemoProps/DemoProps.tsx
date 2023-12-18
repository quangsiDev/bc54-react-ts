import React from "react";
import Card from "./Card";
import { I_User } from "./interface";

export default function DemoProps() {
  let dataUser: I_User = {
    name: "alice",
    gmail: "alice@gmail.com",
    age: 18,
  };
  return (
    <div>
      <Card user={dataUser} title="Profile User" />
    </div>
  );
}
