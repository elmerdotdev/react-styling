import { useState } from 'react'
import styled from 'styled-components' // from a npm package

const StyledComponents = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const SlackDiv = styled.div`
    background-color: orange;
    color: black;
    border-width: 5px;
    border-style: dotted;
    border-color: white;
  `
  const SlackHeading = styled.h1<{ subheading?: boolean }>`
    font-size: ${props => props.subheading ? '1.4rem' : '2rem'};
    text-decoration: underline;
  `

  const SlackParagraph = styled.p`
    text-transform: uppercase;
  `

  const SlackButton = styled.button`
    background-color: ${isDarkMode ? 'black' : 'white'};
    border: 1px solid black;
    color:  ${isDarkMode ? 'white' : 'black'};
    border-radius: 5px;
  `

  const SlackDarkButton = styled(SlackButton)`
    background-color: black;
    color: white;

    &:hover {
      background-color: red;
      color: black;
    }
  `

  const onToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <SlackDiv>
      <SlackHeading subheading>Styled Components:</SlackHeading>
      <SlackParagraph>This is a styled component.</SlackParagraph>
      <SlackButton onClick={onToggle}>Click Me</SlackButton>
      <SlackDarkButton>Click Me</SlackDarkButton>
    </SlackDiv>
  )
}

export default StyledComponents