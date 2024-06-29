"use client";
import Exercises from "@/src/components/infra/Exercises";
import { LayoutContainer } from "./styles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutContainer>
          <Exercises />
          {children}
        </LayoutContainer>
      </body>
    </html>
  );
}
