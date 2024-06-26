import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { Exercise } from "@/src/interfaces/exercise";
import { exerciseService } from "@/src/services/exerciseService";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ContentContainer,
  HeaderContainer,
  ListContainer,
  ListItem,
  PageContainer,
  UList,
} from "./styles";

const EXERCISES: Exercise[] = [];

export default function ExercisesScreen() {
  const [exercises, setExercises] = useState(EXERCISES);
  const [filteredExercises, setFilteredExercises] = useState(EXERCISES);
  const [filterString, setFilterString] = useState("");
  const [newExercise, setNewExercise] = useState("");

  function handleNewExercise() {
    newExercise !== "" ? addNewExercise() : null;
  }

  function addNewExercise() {
    setExercises([
      ...exercises,
      {
        id: 0,
        name: newExercise,
        category: "",
        description: "",
      },
    ]);
    setNewExercise("");
    setFilterString("");
  }

  function filterExercises() {
    const filtered = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(filterString.toLowerCase())
    );
    setFilteredExercises(filtered);
  }

  async function getExercises() {
    await exerciseService
      .getExercises()
      .then((response) => {
        setExercises(response.data);
      })
      .catch(() => {
        setExercises([]);
        throw new Error();
      });
  }

  useEffect(() => {
    setFilteredExercises(exercises);
  }, [exercises]);

  useEffect(() => {
    filterExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterString]);

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <PageContainer>
      <Link href="/">Home</Link>
      <ContentContainer>
        <HeaderContainer>
          <h1>My exercises</h1>
        </HeaderContainer>
        <div>
          <Input
            placeholder="Search exercise"
            onChange={(e) => setFilterString(e.target.value)}
            value={filterString}
            marginRight="5px"
          ></Input>
        </div>
        <ListContainer>
          <UList>
            {filteredExercises.map((exercise) => (
              <ListItem key={exercise.id}>{exercise.name}</ListItem>
            ))}
          </UList>
        </ListContainer>
        <div>
          <Input
            placeholder="Add a new exercise"
            onChange={(e) => setNewExercise(e.target.value)}
            value={newExercise}
            marginRight="5px"
          ></Input>
          <Button onClick={handleNewExercise}>Add exercise</Button>
        </div>
      </ContentContainer>
    </PageContainer>
  );
}
