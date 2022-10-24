import { Link } from "react-router-dom";
import styles from './QuestionCard.module.css'

// Components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const QuestionCard = ({ question }) => {
  return (
    <Link to={`/questions/${question._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{question.title}</h1>
          </span>
          <AuthorInfo content={question} />
        </header>
        <p>{question.text}</p>
      </article>
    </Link>
  )
}

export default QuestionCard