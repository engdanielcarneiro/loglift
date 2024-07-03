"use client";
import IconContainer from "@/src/components/IconContainer";
import MyLink from "@/src/components/MyLink/MyLink";
import TextContainer from "@/src/components/TextContainer/Text";
import { Exercise } from "@/src/interfaces/exercise";
import { exerciseService } from "@/src/services/exerciseService";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { XCircle } from "react-feather";
import { toast } from "react-toastify";
import { Container, ContentContainer, HeaderContainer } from "./styles";

export default function Details({}) {
  const pathname = usePathname();
  const exerciseId = parseInt(pathname.replace("/exercises/", ""), 10);
  const [exercise, setExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    async function handleGetExerciseById() {
      toast.promise(
        exerciseService
          .getExerciseById(exerciseId)
          .then((response) => setExercise(response.data))
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

  return (
    <Container>
      <HeaderContainer>
        <h1>{exercise?.name}</h1>
        <MyLink href={"/exercises"}>
          <IconContainer>
            <XCircle size={28}></XCircle>
          </IconContainer>
        </MyLink>
      </HeaderContainer>
      <ContentContainer>
        <TextContainer margin="0px 0px 5px 0px" fontWeight="600">
          <p>Category</p>
        </TextContainer>
        <TextContainer margin="0px 0px 20px 0px" color="rgb(52, 52, 52)">
          <p>{exercise?.category ? exercise.category : "Not registered"}</p>
        </TextContainer>
        <TextContainer margin="0px 0px 5px 0px" fontWeight="600">
          <p>Description</p>
        </TextContainer>
        <TextContainer color="rgb(52, 52, 52)">
          <p>
            {exercise?.description ? exercise.description : "Not registered"}
          </p>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
}
