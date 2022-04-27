import styled from "styled-components"
import { mobile } from "../responsive";

// background-color: #0F1111;
const Container = styled.div`
height: 30px;
background-color: coral;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 500;
${mobile({ fontSize: "14px" })}

`

const Announcement = () => {
  return (
   <Container> 
       Super Deal! free Shipping on Orders Over $50
   </Container>
  )
}

export default Announcement