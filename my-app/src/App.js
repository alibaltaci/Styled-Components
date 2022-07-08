import './App.css';
import React from "react";
import styled from 'styled-components';

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
`;

const Header = styled.h1`
  font-family: "Hachi Maru Pop", cursive;
  font-size: 5rem;
  color: white;
`;

const Content = styled.p`
  color: white;
  font-size: 3rem;
`;


function App() {
  return (
    <Container>
      <Header>Styled Components</Header>
      <Content>Code With Me!</Content>
    </Container>

  );
}

export default App;

