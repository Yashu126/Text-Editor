import styled from 'styled-components'

export const BackgroundCon = styled.div`
  height: 100vh;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextEditorCon = styled.div`
  height: 80%;
  width: 85%;
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  border-radius: 10px;
`
export const ImageHeadingCon = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: Roboto;
`

export const TextEditorBox = styled.div`
  width: 48%;
  background-color: #25262c;
  border-radius: 10px;
`
export const ButtonCon = styled.ul`
  display: flex;
`

export const Buttons = styled.button`
  background-color: transparent;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  border: none;
  outline: none;
  font-size: 24px;
`

export const List = styled.li`
  list-style-type: none;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  width: 100%;
  border: none;
  height: 80%;
  color: #f8fafc;
  outline: none;
  padding: 20px;
  font-size: 24px;
  font-weight: ${props => (props.boldon ? `bold` : `normal`)};
  font-style: ${props => (props.italicon ? `italic` : `normal`)};
  text-decoration: ${props => (props.underlineon ? `underline` : `normal`)};
`
