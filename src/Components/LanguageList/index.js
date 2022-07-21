import './index.css'

const LanguageList = props => {
  const {listDetails, isActive, LanguageClick} = props
  const {buttonText, id} = listDetails
  const buttonclassName = isActive ? 'button-color' : 'button-list'

  const onClickLanguage = () => {
    LanguageClick(id)
  }

  return (
    <li className="list-items">
      <button
        type="button"
        className={buttonclassName}
        onClick={onClickLanguage}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageList
