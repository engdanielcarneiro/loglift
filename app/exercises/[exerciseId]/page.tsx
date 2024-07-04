"use client";
import Button from "@/src/components/Button";
import IconContainer from "@/src/components/IconContainer";
import Input from "@/src/components/Input";
import MyLink from "@/src/components/MyLink/MyLink";
import TextContainer from "@/src/components/TextContainer/Text";
import { Exercise } from "@/src/interfaces/exercise";
import { exerciseService } from "@/src/services/exerciseService";
import _ from "lodash";
import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { Edit, XCircle } from "react-feather";
import { toast } from "react-toastify";
import {
  Container,
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  HeaderIconsContainer,
} from "./styles";

export default function Details({}) {
  const pathname = usePathname();
  const exerciseId = parseInt(pathname.replace("/exercises/", ""), 10);
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [updatedExercise, setUpdatedExercise] = useState<Exercise | null>(
    exercise
  );

  useEffect(() => {
    async function handleGetExerciseById() {
      toast.promise(
        exerciseService
          .getExerciseById(exerciseId)
          .then((response) => {
            setExercise(response.data);
            setUpdatedExercise(response.data);
          })
          .catch((error) => {
            setExercise(null);
            throw new Error();
          }),
        {
          pending: "Loading exercise...",
          error: "An error has ocurred...",
        }
      );
    }

    handleGetExerciseById();
  }, [exerciseId]);

  function handleIsEditable(): void {
    setIsEditable(true);
  }

  function handleExerciseChange(event: ChangeEvent<HTMLInputElement>): void {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setUpdatedExercise((currentValues) => ({
      ...currentValues,
      [fieldName]: fieldValue,
    }));
  }

  function handleSaveChanges(e: any): void {
    e.preventDefault();
    console.log(updatedExercise);
  }

  function handleCancelChanges(): void {
    setIsEditable(false);
    setUpdatedExercise(exercise);
  }

  function areExerciseChangesValid() {
    if (
      _.isEqual(exercise, updatedExercise) ||
      updatedExercise == null ||
      updatedExercise.name == ""
    )
      return false;
    return true;
  }

  return (
    <Container>
      <form autoComplete="off" onSubmit={handleSaveChanges}>
        <HeaderContainer>
          {isEditable ? (
            <Input
              name="name"
              onChange={(e) => handleExerciseChange(e)}
              value={updatedExercise?.name ?? ""}
              placeholder={exercise?.name ?? ""}
              width="100%"
              marginRight="15px"
            ></Input>
          ) : (
            <TextContainer>
              <h1>{exercise?.name}</h1>
            </TextContainer>
          )}
          <HeaderIconsContainer>
            <IconContainer
              display={isEditable ? "none" : "block"}
              marginRight="10px"
              hoverColor="red"
            >
              <Edit onClick={handleIsEditable} size={25}></Edit>
            </IconContainer>
            <MyLink href={"/exercises"}>
              <IconContainer>
                <XCircle size={28}></XCircle>
              </IconContainer>
            </MyLink>
          </HeaderIconsContainer>
        </HeaderContainer>
        <ContentContainer>
          <TextContainer margin="0px 0px 5px 0px" fontWeight="600">
            <p>Category</p>
          </TextContainer>
          {isEditable ? (
            <Input
              name="category"
              onChange={(e) => handleExerciseChange(e)}
              value={updatedExercise?.category ?? ""}
              placeholder={exercise?.category ?? ""}
              width="100%"
              marginBottom="20px"
            ></Input>
          ) : (
            <TextContainer margin="0px 0px 20px 0px" color="rgb(52, 52, 52)">
              <p>{exercise?.category ? exercise.category : "Not registered"}</p>
            </TextContainer>
          )}
          <TextContainer margin="0px 0px 5px 0px" fontWeight="600">
            <p>Description</p>
          </TextContainer>
          {isEditable ? (
            <Input
              name="description"
              onChange={(e) => handleExerciseChange(e)}
              value={updatedExercise?.description ?? ""}
              placeholder={exercise?.description ?? ""}
              width="100%"
            ></Input>
          ) : (
            <TextContainer color="rgb(52, 52, 52)">
              <p>
                {exercise?.description
                  ? exercise.description
                  : "Not registered"}
              </p>
            </TextContainer>
          )}
        </ContentContainer>
        <FooterContainer display={isEditable ? "flex" : "none"}>
          <Button
            type="submit"
            disabled={!areExerciseChangesValid()}
            width="90px"
            onClick={handleSaveChanges}
          >
            Save
          </Button>
          <Button design="secundary" width="90px" onClick={handleCancelChanges}>
            Cancel
          </Button>
        </FooterContainer>
      </form>
    </Container>
  );
}
