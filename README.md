# Styled Components 

https://styled-components.com/docs/basics

# Motivation

* React ve React Native componetlerimizi stillendirmek için yazılmış bir kütüphanedir.

* **Automatic critical CSS:** Render edilen componentlerin bir listesini tutar ve bunların styleları ile birlikte gelmesini ya da silinirse styleları ile birlikte silinmesini sağlar. Yüklenmesi gereken kodları yükler (code spliting). İşi olmayan CSS ler yüklenmez.

* **No Class Name Bugs:** Style Components, stilleriniz için benzersiz sınıf adları oluşturur. Çoğaltma, çakışma veya yazım hataları konusunda asla endişelenmenize gerek yok.

* **Easier Deletion of CSS:** Bileşen kullanılmıyorsa (hangi takım algılayabilir) ve silinirse, tüm stilleri onunla birlikte silinir. 

* **Simple Dynamic Styling.** Styled Components prop alabilir ve bunlara bir theme geçebiliriz. Alınan sınıfa göre stil belirlenir. Düzinelerce sınıfı manuel olarak yönetmek zorunda kalmadan basit ve sezgiseldir.

* **Painless Maintenance:** (Sorunsuz Bakım) Componentler ve stiller birbirine bağlı. Bileşeninizi etkileyen stili bulmak için asla farklı dosyalar arasında arama yapmanız gerekmez, bu nedenle kod tabanınız ne kadar büyük olursa olsun bakım çocuk oyuncağıdır.

* **Automatic Vendor Prefixing:** CSS'nizi mevcut standarda yazın ve gerisini stil bileşenlerinin halletmesine izin verin.

# Installation

```
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

` import Styled from "styled-components"; `

# CSS / Styled Components

## CSS 

```
.container{
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
  }
```

```
// function App() {
//   return (
//     <div className="container">
//       <h1 className='header'>Styled Components</h1>
//       <p className='content'>Code With Me!</p>
//     </div>
//   );
// }

// export default App;
```

## Styled Components 

```
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
```

```
function App() {
  return (
    <Container>
      <Header>Styled Components</Header>
      <Content>Code With Me!</Content>
    </Container>

  );
}

export default App;
```

# Reusable

Componentler, yani aynı zamanda stiller yeniden kullanılabilir.

```
function App() {
  return (
    <Container>
      <Header>Styled Components</Header>
      <Content>Code With Me!</Content>
    </Container>

  );
}

export default App;
```

# Dynamic Styling / Props

Propları yakalamak

` olor: ${ (props) => (props.primary ? "white" : "palevioletred")}; `

Prop vermek

` <Button primary>Primary Button</Button> `

```
  const Button = styled.button`
  margin: 1rem;
  padding: 1.25rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-size: 1em;
  color: ${ (props) => (props.primary ? "white" : "palevioletred")};
  background-color: ${ (props) => (props.primary ? "palevioletred" : "white")};
`;
```

```
function App() {
  return (
    <Container>
      <Header>Styled Components</Header>
      <Content>Code With Me!</Content>
      
      {/* <Header>Styled Components</Header> */}

      <Button>Regular Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
}

export default App;
```

# Extend

Stillendirilmiş olan Button componetimizi kullanarak (extend) yeni bir BlackButton stillendirelim.

```
const BlackButton = styled(Button)`
  color: black;
`;
```

```
<BlackButton>Black Button</BlackButton>
```

# Fonksiyonel Özellikler

Oluşturduğumuz componentler fonksiyonel özelliklerini kaybetmez.

## Event
```
<Button primary onClick={() => console.log("Click Primary Button")}>Primary Button</Button>
```

## Link

```
<Button as="a" href="/styled">Regular Button</Button>
```

# Pseudo Classes

```
const BlackButton = styled(Button)`
  color: white;
  background-color: black;

  &:hover{
    background-color: violet;
  }
`;
```

# Media Query

```
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
```