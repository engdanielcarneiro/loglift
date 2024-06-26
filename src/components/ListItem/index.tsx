import { LiHTMLAttributes } from "react";
import { Trash2 } from "react-feather";
import { Container, IconContainer, StyledListItem } from "./styles";

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  key: number;
  handleDeleteClick: () => void;
}

export default function ListItem({
  children,
  key,
  handleDeleteClick,
}: ListItemProps) {
  return (
    <Container>
      <StyledListItem key={key}>{children}</StyledListItem>
      <IconContainer>
        <Trash2 onClick={handleDeleteClick} cursor={"pointer"} size={18} />
      </IconContainer>
    </Container>
  );
}
