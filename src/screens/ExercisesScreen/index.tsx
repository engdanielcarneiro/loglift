import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { UUID } from "crypto";
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

interface Exercise {
  id: string;
  name: string;
}

interface Weight {
  exerciseId: UUID;
  weight: number;
  date: Date;
}

const EXERCISES: Exercise[] = [
  { id: crypto.randomUUID(), name: "Back Squat" },
  { id: crypto.randomUUID(), name: "Front Squat" },
];
// const WEIGHTS: Weight[] = [
//   {
//     exerciseId: randomUUID(),
//     weight: 140,
//     date: new Date("25/04/2023"),
//   },
//   {
//     exerciseId: randomUUID(),
//     weight: 110,
//     date: new Date("12/06/2023"),
//   },
// ];

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
      { id: crypto.randomUUID(), name: newExercise },
    ]);
    setNewExercise("");
    setFilterString("");
  }

  function filterExercises(): void {
    const filtered = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(filterString.toLowerCase())
    );
    setFilteredExercises(filtered);
  }

  useEffect(() => {
    setFilteredExercises(exercises);
  }, [exercises]);

  useEffect(() => {
    filterExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterString]);

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
