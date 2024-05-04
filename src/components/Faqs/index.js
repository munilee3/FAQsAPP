import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {intialAns: []}

  plusBtnClicked = id => {
    const {intialAns} = this.state
    this.setState({intialAns: [...intialAns, id]})
  }

  minusBtnClicked = id => {
    const {intialAns} = this.state
    this.setState({intialAns: intialAns.filter(eachAns => eachAns !== id)})
  }

  render() {
    const {faqsList} = this.props
    const {intialAns} = this.state
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="faqs">FAQs</h1>
          <ul className="faq-list">
            {faqsList.map(eachFaqs => (
              <FaqItem
                key={eachFaqs.id}
                faqsDetails={eachFaqs}
                minusBtnClicked={this.minusBtnClicked}
                plusBtnClicked={this.plusBtnClicked}
                showAndHide={intialAns.includes(eachFaqs.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
