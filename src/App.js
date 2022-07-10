import {component} from 'react'

import LanguageList from './LanguageList'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () =>
  class multilanguage extends Component {
    state = {
      activeId: languageGreetingsList[0].id,
    }

    LanguageClick = id => {
      this.setState({activeId: id})
    }

    render() {
      const {activeId} = this.state
      const {imageUrl, imageAltText} = languageGreetingsList[activeId]

      return (
        <div className="bg-container">
          <h1 className="heading">Multilingual Greetings</h1>
          {LanguageList.map(eachlanguage => (
            <LanguageList
              key={eachlanguage.id}
              listDetails={eachlanguage}
              isActive={activeId === eachlanguage.id}
              LanguageClick={this.LanguageClick}
            />
          ))}
          <div className="image-display-container">
            <img src={imageUrl} className="image" alt={imageAltText} />
          </div>
        </div>
      )
    }
  }

export default App
