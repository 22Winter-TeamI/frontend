import styled from "styled-components";
import Box from "../components/Box";

const TestDIV = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
`;

function Main() {
  return (
    <TestDIV>
      <Box //흰색 배경 만들기
        width="300px"
        height="250px"
        backgroundColor="black"
        borderRadius="5px"
      >
        {" "}
      </Box>
    </TestDIV>
  );
}

export default Main;
