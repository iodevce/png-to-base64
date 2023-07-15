import React, { useEffect, useRef, useState } from 'react'

import { 
  AppContainer, 
  Banner, 
  Container, 
  Form, 
  FormElement, 
  Input,
  Label, 
  Image, 
  ResultContainer, 
  ResultParagraph, 
  Subtitle, 
  Title,
  Button
} from './app'

const siteData = {
  title: 'Png to Base64',
  subtitle: 'Simple online portable network graphics image to base64 converter',
  emptyFileMessage: 'Click here to select an image from your device',
  buttonContent: 'Copy to Clipborad'
}

function App() {

  const [ file, setFile ] = useState('')
  const [ isDisable, setIsDisable] = useState(true)
  const textRef = useRef(null)

  const handleInputChange = e => {
    const file = e.target.files[0]
    if(file) {
      const r = new FileReader()
      r.onload = () => setFile(r.result)
      r.readAsDataURL(file)
      return
    }
    setFile('')
  }

  const handleCopyTo = async () => {
    if(textRef.current) {
      if('clipboard' in navigator) {
        await navigator.clipboard.writeText(textRef.current.innerText)
      }
    }
  }

  useEffect(() => file ? setIsDisable(false) : setIsDisable(true),  [file])

  return (
    <AppContainer>
      <Banner>
        <Title>{siteData.title}</Title>
        <Subtitle>{siteData.subtitle}</Subtitle>
      </Banner>

      <Container>
        <Form>
          <FormElement>
            <Label htmlFor="file">
              { file ? <Image src={file} /> : siteData.emptyFileMessage}
            </Label>
            <Input type="file" id="file" onChange={handleInputChange}/>
          </FormElement>
        </Form>
        <ResultContainer>
          <ResultParagraph ref={textRef}>{file && file}</ResultParagraph>
        </ResultContainer>
        <Button disabled={isDisable} className={isDisable && 'isDisable'} onClick={handleCopyTo}>{siteData.buttonContent}</Button>
      </Container>
    </AppContainer>
  )
}

export default App
