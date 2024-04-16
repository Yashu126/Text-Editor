import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BackgroundCon,
  TextEditorCon,
  ImageHeadingCon,
  Heading,
  TextEditorBox,
  Buttons,
  TextArea,
  ButtonCon,
  List,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderlined: false}

  changeBold = () => {
    this.setState(prev => ({isBold: !prev.isBold}))
  }

  changeItalic = () => {
    this.setState(prev => ({isItalic: !prev.isItalic}))
  }

  changeUnderline = () => {
    this.setState(prev => ({isUnderlined: !prev.isUnderlined}))
  }

  render() {
    const {isBold, isItalic, isUnderlined} = this.state
    return (
      <BackgroundCon>
        <TextEditorCon>
          <ImageHeadingCon>
            <Heading>Text Editor</Heading>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageHeadingCon>
          <TextEditorBox>
            <ButtonCon>
              <List>
                <Buttons
                  data-testid="bold"
                  active={isBold}
                  onClick={this.changeBold}
                  type="button"
                >
                  <VscBold />
                </Buttons>
              </List>
              <List>
                <Buttons
                  data-testid="italic"
                  active={isItalic}
                  onClick={this.changeItalic}
                  type="button"
                >
                  <GoItalic />
                </Buttons>
              </List>
              <List>
                <Buttons
                  data-testid="underline"
                  active={isUnderlined}
                  onClick={this.changeUnderline}
                  type="button"
                >
                  <AiOutlineUnderline />
                </Buttons>
              </List>
            </ButtonCon>
            <hr />
            <TextArea
              boldon={isBold}
              italicon={isItalic}
              underlineon={isUnderlined}
            />
          </TextEditorBox>
        </TextEditorCon>
      </BackgroundCon>
    )
  }
}
export default TextEditor
