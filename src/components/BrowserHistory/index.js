import {Component} from 'react'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class BrowserHistory extends Component {
  state = {
    searchHistoryList: initialHistoryList,
    searchInput: '',
  }

  onInputValueChange = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = uniqueId => {
    const {searchHistoryList} = this.state
    const filteredSearchHistory = searchHistoryList.filter(
      each => each.id !== uniqueId,
    )
    this.setState({
      searchHistoryList: filteredSearchHistory,
    })
  }

  render() {
    const {searchHistoryList, searchInput} = this.state
    const searchResults = searchHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let displayItem

    if (searchResults.length === 0) {
      displayItem = (
        <p className="no-history-text">There is no history to show</p>
      )
    } else {
      displayItem = (
        <ul className="history-bg-container">
          {searchResults.map(eachHistory => (
            <li className="history-container" key={eachHistory.id}>
              <p>{eachHistory.timeAccessed}</p>
              <div className="history-logo-title">
                <img
                  src={eachHistory.logoUrl}
                  alt="domain logo"
                  className="logo"
                />
                <p>{eachHistory.title}</p>
                <p className="domain-url">{eachHistory.domainUrl}</p>
              </div>
              <button
                type="button"
                className="del-button"
                onClick={() => this.deleteHistory(eachHistory.id)}
                data-testid="delete"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                />
              </button>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <div>
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
          </div>
          <input
            type="search"
            className="input-el"
            placeholder="Search history"
            onChange={this.onInputValueChange}
          />
        </nav>
        <div className="bottom-bg">{displayItem}</div>
      </div>
    )
  }
}

export default BrowserHistory
