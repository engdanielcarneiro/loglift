import Link from "next/link";
import { HTMLAttributes } from "react";
import styles from "./MyLink.module.css";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function MyLink({ href, children }: LinkProps) {
  return (
    <Link className={styles.customLink} href={href}>
      {children}
    </Link>
  );
}
