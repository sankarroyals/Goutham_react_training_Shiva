import React, { useState } from "react";
import  AdminData  from "./AdminData";
import sum from "../sum"; 

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => alert(sum(2, 2))}>Add 2 + 2</button>
      <br />
      <br />
      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle Admin</button>
      {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
    </>
  );
}
