"use client";
import IconContainer from "@/src/components/IconContainer";
import Input from "@/src/components/Input";
import ListItem from "@/src/components/ListItem";
import { Exercise } from "@/src/interfaces/exercise";
import { exerciseService } from "@/src/services/exerciseService";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeftCircle, PlusCircle } from "react-feather";
import { ToastContainer, toast } from "react-toastify";
import MyLink from "../../MyLink/MyLink";
import TextContainer from "../../TextContainer/Text";
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
  const router = useRouter();
  const [exercises, setExercises] = useState(EXERCISES);
  const [filteredExercises, setFilteredExercises] = useState(EXERCISES);
  const [filterString, setFilterString] = useState("");
  const [newExercise, setNewExercise] = useState("");
  const detailsPageId = parseInt(usePathname().replace("/exercises/", ""), 10);

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
        error: "Something went wrong.",
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

  function handleDeleteExercise(
    event: React.SyntheticEvent,
    exerciseId: number
  ) {
    event.preventDefault();
    deleteExercise(exerciseId);
    if (exerciseId == detailsPageId) router.push("/exercises");
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
        error: "An error has ocurred.",
      }
    );
  }

  useEffect(() => {
    setFilteredExercises(exercises);
  }, [exercises]);

  useEffect(() => {
    function filterExercises() {
      const filtered = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(filterString.toLowerCase())
      );
      setFilteredExercises(filtered);
    }

    filterExercises();
  }, [filterString, exercises]);

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <HeaderContainer>
          <MyLink href="/">
            <IconContainer>
              <ArrowLeftCircle size={28} />
            </IconContainer>
          </MyLink>
          <TextContainer margin="0px 0px 0px 15px">
            <h1>My exercises</h1>
          </TextContainer>
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
              <MyLink key={exercise.id} href={`/exercises/${exercise.id}`}>
                <ListItem
                  deleteIconOnClick={(event) =>
                    handleDeleteExercise(event, exercise.id)
                  }
                >
                  {exercise.name}
                </ListItem>
              </MyLink>
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
