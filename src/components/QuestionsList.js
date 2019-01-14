import React, {Component} from 'react';
import Question from './Question.js'

class QuestionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNum: this.props.questions[0].num,
            answer: this.props.questions[0].answer,
            userAnswer: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        // if the answer is correct go to the folowing one, otherwise don't move
        if (this.state.answer === this.state.userAnswer) {
           this.setState({questionNum: this.state.questionNum + 1, answer: this.props.questions[this.state.questionNum + 1].answer, userAnswer: ""}) 
        }
        console.log(event.target.value);

    }

    handleChange(event) {
        this.setState({userAnswer: event.target.value})
    }

    render() {


        return(
            <div>Write your answer
                <p>Question number {this.state.questionNum}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }

}

export default QuestionsList;