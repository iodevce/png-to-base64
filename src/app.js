import styled from 'styled-components'

export const AppContainer = styled.div`
padding: 0 .5rem;
`
export const Banner = styled.div`
max-width: 1100px;
background: linear-gradient(#6a426f, #3e2641);
padding: 2.5rem;
border-radius: 1rem;
color: #ffffff;
margin: 3.5rem auto;
`
export const Title = styled.h1`
font-size: 3.5rem;
`
export const Subtitle = styled.h4``

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
max-width: 1100px;
margin: 0 auto;
position: relative;
`

export const Form = styled.form``

export const FormElement = styled.div`
height: 100%;
`

export const Input = styled.input`
display: none;
opacity: 0;
width: 0;
height: 0;
z-index: -1;
`

export const Label = styled.label`
overflow: hidden;
height: 100%;
width: 100%;
background-color: #f5f5f5;
transition: .25s all;

display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

&:hover {
  background-color: #dddddd;
}

&:hover > img{
  transform: scale(1.025);
}
`

export const Image = styled.img`
width: 95%;
max-width: 300px;
border-radius: 1em;
`

export const ResultContainer = styled.div`
height: 500px;
overflow-y: scroll;
border: 1px solid #d6d6d6;
padding: 1em;
`
export const ResultParagraph = styled.p`
word-wrap: break-word;
`

export const Button = styled.button`
position: absolute;
bottom: -50px;
right: 0px;
outline: none;
padding: .5rem;
border: none;
border-radius: .25rem;
cursor: pointer;
color: #1e90ff;
background-color: #1e90ff20;
border: 1px solid #1e90ff;
transition: .25s all;

&:hover {
  transform: scale(1.05);
}

&.isDisable {
  background-color: #eeeeee;
  border: 1px solid #d6d6d6;
  cursor: not-allowed;
  color: #aaaaaa;

  &:hover {
    transform: scale(1);
  }
}
`