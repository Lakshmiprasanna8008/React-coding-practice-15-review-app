// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  leftButton = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index > 0 && index < reviewsList.length) {
      this.setState(prevState => ({index: prevState.index - 1}))
    } else {
      this.setState({index: 0})
    }
  }

  rightButton = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index >= 0 && index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    } else {
      this.setState({index: reviewsList.length - 1})
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <h1>Reviews</h1>
        <img className="profile" src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[index]
    return (
      <div className="whole-container">
        <div className="inner-container">
          <button
            type="button"
            onClick={this.leftButton}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            onClick={this.rightButton}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
