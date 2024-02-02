// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  arrowSuggestion = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              className="google-img"
              alt="google logo"
            />
          </div>

          <div className="search-container">
            <div className="serach-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />

              <input
                type="search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                className="serach-box"
                placeholder="search Google"
              />
            </div>

            <ul className="suggestions-container">
              {searchResults.map(eachSearch => (
                <SuggestionItem
                  key={eachSearch.id}
                  searchDetails={eachSearch}
                  arrowSuggestion={this.arrowSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
