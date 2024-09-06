"use client";
import { useRouter } from "next/navigation";
/** @jsxImportSource @emotion/react */
import { useStore } from "../store/store";

import styled from "@emotion/styled";
import { useState } from "react";

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

const ClientComponent = ({ text }: any) => {
  const user = useStore((store) => store.user);

  const [data, setData] = useState<any>({ res: {result : "success"} });
  console.log("client Component store", user);

  const renderSimulation = () => {
    try {
      return (<Title>{data.res.result}</Title>);
    } catch (error) {
      return <Title>Error Refresh again</Title>;
    }
  };
  const errorSimulation = () => {
    setData({});
  };
  const router = useRouter();

  return (
    <Container>
      <Title>Client Component</Title>
      <SubTitle>{user?.title}</SubTitle>
      <SubTitle>{text}</SubTitle>
      {/* <button onClick={errorSimulation}>Simulate Error</button>
      {renderSimulation()} */}
    </Container>
  );
};

export default ClientComponent;
