import styled from 'styled-components'

const theme ={
    font: {
      primary: "'Oswald', sans-serif",
      secondary:"Arial, sans-serif"
    },
    colors : {
      primary: "rgb(95,158,160)"
    }
  }

const Container = styled.div`
 display: flex;
 flex-wrap: wrap;
 `

 const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  border:2px grey solid;
  margin: auto;
  border: solid;
  h3{
      color : rgb(95,158,160);
      font-family: ${props => props.theme.font.primary}
  }
  img{
    height:300px; 
    width:300px;
  }
`
const Headers = styled.div`
  height: 210px;
  background-color: darkslategray;
  display: flex;
  text-align: center;
  width: auto;
  
  .col-6{
    display: flex;
    height: 200px; 
    float:left;
    font-size:2em; 
    padding-left:10px; 
    width:auto;
  }
  #text{
      display: inline-block;
      padding-left: 4em;
  }
  h6{
    color:gray; 
    font-size:1rem;
    font-style: italic;
  }
`
const Details = styled.div`
border:solid; 
width:700px;
 margin:auto;
 height: 700px;
 padding-left: 100px;

 img{
     width:500px;
     height:400px;
    }
`
const AboutStyle = styled.div`
  height: 600px;
  width:auto;
  background-image: url("https://image.freepik.com/free-vector/white-textured-paper_53876-86282.jpg");

`
const HomeStyle = styled.div`
  height: 600px;
  width:auto;
  background-image: url("https://i.pinimg.com/736x/7c/b1/86/7cb18679659f791b1191bea97b74dfc0.jpg");

`
const SignupStyle = styled.div`
height: 600px;
  width:auto;
  background-image: url("https://image.freepik.com/free-vector/white-textured-paper_53876-86282.jpg");

`
const FoodFormStyle = styled.div`
height: 600px;
  width:auto;
  background-image: url("https://image.freepik.com/free-vector/white-textured-paper_53876-86282.jpg");

`


 export {Container, Card, theme, Headers, Details, AboutStyle, HomeStyle, SignupStyle, FoodFormStyle
}