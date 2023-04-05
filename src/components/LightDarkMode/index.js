import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    buttonText: 'Light Mode',
    bgClassName: 'dark-mode-container',
    headingClassName: 'dark-mode-heading',
  }

  changeMode = () => {
    this.setState(prevState => {
      if (prevState.buttonText === 'Light Mode') {
        return {
          buttonText: 'Dark Mode',
          bgClassName: 'light-mode-container',
          headingClassName: 'light-mode-heading',
        }
      }
      return {
        buttonText: 'Light Mode',
        bgClassName: 'dark-mode-container',
        headingClassName: 'dark-mode-heading',
      }
    })
  }

  render() {
    const {buttonText, bgClassName, headingClassName} = this.state
    return (
      <div className="bg-container">
        <div className={bgClassName}>
          <h1 className={headingClassName}>Click To Change Mode</h1>
          <button type="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
