"use client";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import styles from "./page.module.css";

const EXERCISES = ["Back Squat", "Front Squat"];

export default function Home() {
  const [exercises, setExercises] = useState(EXERCISES);
  const [filteredExercises, setFilteredExercises] = useState([""]);
  const [filterString, setFilterString] = useState("");
  const [newExercise, setNewExercise] = useState("");

  function handleNewExercise() {
    newExercise !== "" ? addNewExercise() : null;
  }

  function addNewExercise() {
    setExercises([...exercises, newExercise]);
    setNewExercise("");
    setFilterString("");
  }

  function handleExercisesFiltering(): void {
    setFilteredExercises(
      exercises.filter((exercise) =>
        exercise.toLowerCase().includes(filterString.toLowerCase())
      )
    );
  }

  useEffect(() => {
    setFilteredExercises(exercises);
  }, [exercises]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Lift Log</h1>
      </div>
      <div className={styles.content}>
        <h2 style={{ marginBottom: "15px" }}>My exercises</h2>
        <div>
          <Input
            placeholder="Search exercise"
            onChange={(e) => setFilterString(e.target.value)}
            value={filterString}
            marginRight="5px"
          ></Input>
          <Button onClick={handleExercisesFiltering}>Search</Button>
        </div>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            {filteredExercises.map((exercise, id) => (
              <li key={id}>{exercise}</li>
            ))}
          </ul>
        </div>
        <div>
          <Input
            placeholder="Add a new exercise"
            onChange={(e) => setNewExercise(e.target.value)}
            value={newExercise}
            marginRight="5px"
          ></Input>
          <Button onClick={handleNewExercise}>Add exercise</Button>
        </div>
      </div>
    </div>
  );
}
