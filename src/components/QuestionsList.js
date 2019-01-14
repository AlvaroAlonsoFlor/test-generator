import React from 'react';
import Question from './Question.js'


const QuestionsList = ({questions}) => {
    if (!questions) {
        return null
    }
    const questionsList = questions.map((question) => {
       return <Question num={question.num} key={question.num} answer={question.answer}/>
    });

    return(
        <div>
            {questionsList}
        </div>
    )
}

export default QuestionsList;