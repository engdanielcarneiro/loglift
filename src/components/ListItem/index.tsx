import { LiHTMLAttributes } from "react";
import { Trash2 } from "react-feather";
import IconContainer from "../IconContainer";
import { Container, StyledListItem } from "./styles";

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  key: number;
  deleteIconOnClick: (event: React.SyntheticEvent) => void;
  onClick?: () => void;
}

export default function ListItem({
  children,
  key,
  deleteIconOnClick,
  onClick,
}: ListItemProps) {
  return (
    <Container onClick={onClick}>
      <StyledListItem key={key}>{children}</StyledListItem>
      <IconContainer hoverColor="red">
        <Trash2 onClick={deleteIconOnClick} size={19} />
      </IconContainer>
    </Container>
  );
}
