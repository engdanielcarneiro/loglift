"use client";
import IconContainer from "@/src/components/IconContainer";
import MyLink from "@/src/components/MyLink/MyLink";
import Text from "@/src/components/Text/Text";
import { XCircle } from "react-feather";
import { Container, ContentContainer, HeaderContainer } from "./styles";

export default function Details({}) {
  return (
    <Container>
      <HeaderContainer>
        <h1>Front Squat</h1>
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
          Legs
        </Text>
        <Text margin="0px 0px 5px 0px" fontWeight="600">
          Description
        </Text>
        <Text color="rgb(52, 52, 52)">
          Great legs exercised focused on quadriceps
        </Text>
      </ContentContainer>
    </Container>
  );
}
