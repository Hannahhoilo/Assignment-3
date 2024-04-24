import { useState } from "react";
import "./App.css";
import ExpenceComponent from "./components/ExpenceComponent/ExpenceComponent";
import styles from "./App.module.css";
import { DeleteButton } from "./components/DeleteButton";

function App() {
  return (
    <>
      <div className={styles.main_container}>
        <h1>Expense Tracker!</h1>
        <ExpenceComponent></ExpenceComponent>
        <DeleteButton></DeleteButton>
      </div>
    </>
  );
}

export default App;
