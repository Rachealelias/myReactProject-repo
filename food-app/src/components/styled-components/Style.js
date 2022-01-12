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
    padding-left:30px; 
    align-content:center;
    width:auto;
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
    

 }
`


 export {Container, Card, theme, Headers, Details}