import './App.css';
import React from "react";
import styled, { keyframes, CSS, css} from 'styled-components';

// Styled Components (CSS in JS and the CSS Module)
// React & React Native 
// Tagged Template Literals


// Aşağıdaki Stylesheets ile yapılan işlemlerin aynısı Styled Componet ile yapalım

// function App() {
//   return (
//     <div className="container">
//       <h1 className='header'>Styled Components</h1>
//       <p className='content'>Code With Me!</p>
//     </div>
//   );
// }

// export default App;


// Styled Components

// Container
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 90rem;
  height: 100vh;
  padding: 2rem;
  background-color: darkturquoise;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px){
    background-color: black;
  }
`;

// const Header = styled.h1`
//   font-family: "Hachi Maru Pop", cursive;
//   font-size: 5rem;
//   color: white;
// `;

// css Block
const Header = styled.h1`
  font-family: "Hachi Maru Pop", cursive;
  font-size: 5rem;
  color: white;
  ${ (props) => 
    props.xyz && 
    css`
      font-size: 55px;
      color: violet;
    `}
`;

const Content = styled.p`
  color: white;
  font-size: 3rem;
`;

// props
const Button = styled.button`
  margin: 1rem;
  padding: 1.25rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-size: 1em;
  color: ${ (props) => (props.primary ? "white" : "palevioletred")};
  background-color: ${ (props) => (props.primary ? "palevioletred" : "white")};
`;

// extend & pseudo classes
const BlackButton = styled(Button)`
  color: white;
  background-color: black;

  &:hover{
    background-color: violet;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);    
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

function App() {
  return (
    <Container>
      <Header>Styled Components</Header>
      <Header xyz>Styled Components</Header>
      <Content>Code With Me!</Content>
      
      {/* <Header>Styled Components</Header> */}

      <Button as="a" href="/styled">Regular Button</Button>
      <Button primary onClick={() => console.log("Click Primary Button")}>Primary Button</Button>
      <BlackButton onClick={() => console.log("Click Black Button")}>Black Button</BlackButton>

      <Rotate>Animation</Rotate>
  
    </Container>
  );
}

export default App;

