"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const HeaderContainer = styled.header`
  height: 68px;
  background-color: grey;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
`;

const CustomButton = styled.div`
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid black;
`;

export default function Header() {
  const { push } = useRouter();
  return (
    <HeaderContainer>
      <CustomButton
        onClick={() => {
          push("/");
        }}
      >
        Navigate to Home
      </CustomButton>
      <CustomButton
        onClick={() => {
          push("/test");
        }}
      >
        Navigate to Test
      </CustomButton>
    </HeaderContainer>
  );
}
