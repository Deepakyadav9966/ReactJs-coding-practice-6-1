// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onChangeBtn = () => {
    const RandomNumber = this.getRandomNumber()
    this.setState(() => ({count: RandomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <>
        <div className="bg-container">
          <div className="card-container">
            <h1 className="heading">Random Number</h1>
            <p className="paragraph">
              Generate a random number in the range of 0 to 100
            </p>
            <button className="btn" type="button" onClick={this.onChangeBtn}>
              Generate
            </button>
            <p>{count}</p>
          </div>
        </div>
      </>
    )
  }
}

export default RandomNumberGenerator
