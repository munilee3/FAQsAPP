import './index.css'

const FaqItem = props => {
  const {faqsDetails, minusBtnClicked, plusBtnClicked, showAndHide} = props
  const {id, questionText, answerText} = faqsDetails

  const onClickPlusBtn = () => {
    plusBtnClicked(id)
  }

  const onClickMinusBtn = () => {
    minusBtnClicked(id)
  }

  return showAndHide ? (
    <li className="faq-list-container">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button
          type="button"
          className="show-Hide-Ans"
          onClick={onClickMinusBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
            alt="minus"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
      <p className="answer">{answerText}</p>
    </li>
  ) : (
    <li className="faq-list-container">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button
          type="button"
          className="show-Hide-Ans"
          onClick={onClickPlusBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus"
          />
        </button>
      </div>
    </li>
  )
}

export default FaqItem
