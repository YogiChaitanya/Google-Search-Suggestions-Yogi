// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchDetails, arrowSuggestion} = props
  const {suggestion} = searchDetails

  const onArrowClick = () => {
    arrowSuggestion(suggestion)
  }

  return (
    <li className="search-item">
      <p>{suggestion}</p>

      <button type="button" className="btn" onClick={onArrowClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-icon"
          alt="arrow icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
