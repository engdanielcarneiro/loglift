"use client";
import IconContainer from "@/src/components/IconContainer";
import MyLink from "@/src/components/MyLink/MyLink";
import Text from "@/src/components/Text/Text";
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

  async function handleGetExerciseById(exerciseId: number) {
    toast.promise(
      exerciseService
        .getExerciseById(exerciseId)
        .then((response) => setExercise(response.data))
        .catch((error) => {
          throw new Error();
        }),
      {
        pending: "Loading exercise...",
        error: "An error has ocurred...",
      }
    );
  }

  useEffect(() => {
    handleGetExerciseById(exerciseId);
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
        <Text margin="0px 0px 5px 0px" fontWeight="600">
          Category
        </Text>
        <Text margin="0px 0px 20px 0px" color="rgb(52, 52, 52)">
          {exercise?.category ? exercise.category : "Não cadastrado"}
        </Text>
        <Text margin="0px 0px 5px 0px" fontWeight="600">
          Description
        </Text>
        <Text color="rgb(52, 52, 52)">
          {exercise?.description ? exercise.description : "Não cadastrado"}{" "}
        </Text>
      </ContentContainer>
    </Container>
  );
}
