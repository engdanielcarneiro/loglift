import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { Exercise } from "@/src/interfaces/exercise";
import { exerciseService } from "@/src/services/exerciseService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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

  function handleNewExercise(e: any) {
    e.preventDefault();
    newExercise !== "" ? addNewExercise() : null;
  }

  function addNewExercise() {
    postAddExercise({
      id: 0,
      name: newExercise,
      category: "",
      description: "",
    });
  }

  function filterExercises() {
    const filtered = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(filterString.toLowerCase())
    );
    setFilteredExercises(filtered);
  }

  async function getExercises() {
    toast.promise(
      exerciseService
        .getExercises()
        .then((response) => {
          setExercises(response.data);
        })
        .catch(() => {
          setExercises([]);
          throw new Error();
        }),
      {
        pending: "Loading exercises...",
        error: "Something went wrong",
      }
    );
  }

  async function postAddExercise(addExercisePayload: Exercise) {
    toast.promise(
      exerciseService
        .postAddExercise(addExercisePayload)
        .then((response) => {
          getExercises();
          setNewExercise("");
          setFilterString("");
        })
        .catch(() => {
          throw new Error();
        }),
      {
        pending: "Adding exercise",
        error: "Something went wrong.",
      }
    );
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <form autoComplete="off" onSubmit={handleNewExercise}>
            <Input
              placeholder="Add a new exercise"
              onChange={(e) => setNewExercise(e.target.value)}
              value={newExercise}
              marginRight="5px"
            ></Input>
            <Button type="submit" onClick={handleNewExercise}>
              Add exercise
            </Button>
          </form>
        </div>
      </ContentContainer>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </PageContainer>
  );
}
