import Link from "next/link";
import { Container } from "./styles";

export default function HomeScreen() {
  return (
    <Container>
      <ul>
        <li>
          <Link href={"/exercises"}>Exercises</Link>
        </li>
        <li>
          <Link href={"/weights"}>Weights</Link>
        </li>
      </ul>
    </Container>
  );
}
