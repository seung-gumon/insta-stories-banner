import React from "react";
import styled from "styled-components";

interface IWrap {}

const Wrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

interface IStores {
  contents: string[];
}

const Stories: React.FC<IStores> = ({ contents }) => {
  return (
    <Wrap>
      {contents.map((content) => {
        return <span>{content}</span>;
      })}
    </Wrap>
  );
};

export default Stories;
