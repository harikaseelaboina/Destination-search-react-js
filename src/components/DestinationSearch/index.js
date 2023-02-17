// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchinput: ''}

  inputfunc = event => {
    this.setState({searchinput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchinput} = this.state

    const searchResults = destinationsList.filter(eachitem =>
      eachitem.name.toLowerCase().includes(searchinput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="head1">Destination Search</h1>
        <div className="icondiv">
          <input type="search" value={searchinput} onChange={this.inputfunc} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="img2"
          />
        </div>

        <ul className="list">
          {searchResults.map(eachitem => (
            <DestinationItem details={eachitem} key={eachitem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
