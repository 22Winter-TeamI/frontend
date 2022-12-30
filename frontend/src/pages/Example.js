import styled from "styled-components";
import Box from "../components/Box";
import style from "../css/Example.css";

function Example() {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="box1">Box1</div>
        <div class="box2">Box2</div>
        <div class="box3">Box3</div>
      </div>
      <Box //흰색 배경 만들기
        width="300px"
        height="250px"
        backgroundColor="olive"
        borderRadius="5px"
      >
        box4
      </Box>
      <Box //흰색 배경 만들기
        width="300px"
        height="250px"
        backgroundColor="skyblue"
        borderRadius="5px"
      >
        box5
      </Box>
    </div>
  );
}

export default Example;
