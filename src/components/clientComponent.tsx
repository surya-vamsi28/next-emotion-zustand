"use client";
/** @jsxImportSource @emotion/react */
import { useStore } from "../store/store";

import styled from "@emotion/styled";

const Title = styled.div`
  font-size: 32px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

const SubTitle = styled.div`
  font-size: 24px;
`;

const ClientComponent = () => {
  const user = useStore((store) => store.user);

  return (
    <Container>
      <Title>Client Component</Title>
      <SubTitle>{user?.title}</SubTitle>
    </Container>
  );
};

export default ClientComponent;
