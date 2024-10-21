import { useState } from "react";

export default function AddTask({ onAdd }) {
  return (
    <>
      <input placeholder="Add task" />
      <button>Add</button>
    </>
  );
}
