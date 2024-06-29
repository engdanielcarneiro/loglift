"use client";
import IconContainer from "@/src/components/IconContainer";
import Input from "@/src/components/Input";
import ListItem from "@/src/components/ListItem";
import { Exercise } from "@/src/interfaces/exercise";
import { exerciseService } from "@/src/services/exerciseService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PlusCircle, XCircle } from "react-feather";
import { ToastContainer, toast } from "react-toastify";
import {
  ContentContainer,
  HeaderContainer,
  ListContainer,
  NewExerciseContainer,
  PageContainer,
  SearchContainer,
  UList,
} from "./styles";

const EXERCISES: Exercise[] = [];

export default function Exercises() {
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

  function handleDeleteExercise(exerciseId: number) {
    deleteExercise(exerciseId);
  }

  function handleExerciseClick(exerciseId: number) {
    console.log(exerciseId);
  }

  async function deleteExercise(exerciseId: number) {
    toast.promise(
      exerciseService
        .deleteExercise(exerciseId)
        .then((response) => {
          getExercises();
        })
        .catch((error) => {
          throw new Error();
        }),
      {
        pending: "Deleting exercise...",
        error: "An error ocurred.",
      }
    );
  }

  useEffect(() => {
    setFilteredExercises(exercises);
  }, [exercises]);

  useEffect(() => {
    filterExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterString, exercises]);

  useEffect(() => {
    getExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <HeaderContainer>
          <h1>My exercises</h1>
          <Link href="/">
            <IconContainer>
              <XCircle size={28} />
            </IconContainer>
          </Link>
        </HeaderContainer>
        <SearchContainer>
          <Input
            placeholder="Search exercise"
            onChange={(e) => setFilterString(e.target.value)}
            value={filterString}
            marginRight="5px"
            width="100%"
          ></Input>
        </SearchContainer>
        <ListContainer>
          <UList>
            {filteredExercises.map((exercise) => (
              <ListItem
                onClick={() => handleExerciseClick(exercise.id)}
                deleteIconOnClick={() => handleDeleteExercise(exercise.id)}
                key={exercise.id}
              >
                <Link href={`${exercise.id}`}>{exercise.name}</Link>
              </ListItem>
            ))}
          </UList>
        </ListContainer>
        <form autoComplete="off" onSubmit={handleNewExercise}>
          <NewExerciseContainer>
            <Input
              placeholder="Add a new exercise"
              onChange={(e) => setNewExercise(e.target.value)}
              value={newExercise}
              marginRight="10px"
            ></Input>
            <IconContainer>
              <PlusCircle onClick={handleNewExercise} type="submit" size={30} />
            </IconContainer>
          </NewExerciseContainer>
        </form>
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
