import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentId: 0,
  }

  moveB = () => {
    this.setState(prevState => ({
      currentId: prevState.currentId > 0 ? prevState.currentId - 1 : 3,
    }))
  }

  moveF = () => {
    this.setState(prevState => ({
      currentId: prevState.currentId < 3 ? prevState.currentId + 1 : 0,
    }))
  }

  render() {
    const {currentId} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[currentId]

    return (
      <div className="bg-main">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} className="bg-img" />
        <div className="bg-name">
          <button type="button" onClick={this.moveB} data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="user-name">{username}</p>
          <button type="button" onClick={this.moveF} data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company">{companyName}</p>
        <p className="descrip">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
