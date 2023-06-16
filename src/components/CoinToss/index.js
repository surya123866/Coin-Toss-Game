import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onButtonClick = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const Total = headsCount + tailsCount
    return (
      <div className="App-container">
        <div className="bg-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} className="coin-image" alt="toss result" />
          <button
            type="button"
            className="spin-button"
            onClick={this.onButtonClick}
          >
            Toss Coin
          </button>
          <div className="toss-count-container">
            <p className="count">Total:{Total}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
