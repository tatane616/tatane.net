import React from "react";
import styled from "styled-components";

export const Home: React.FC = () => {
  return (
    <Wrapper>
      <h1>🏗 Under Construction</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SMWi7CLoZ2Q"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <a
        href="https://twitter.com/tatane616"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        href="https://github.com/tatane616"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
