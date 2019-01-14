import React, {Component} from 'react';

class QuestionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNum: this.props.questions[0].num,
            answer: this.props.questions[0].answer,
            userAnswer: "",
            fail: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        // if the answer is correct go to the folowing one, otherwise don't move
        if (this.state.answer.toLowerCase() === this.state.userAnswer.toLowerCase()) {
           this.setState({questionNum: this.state.questionNum + 1, answer: this.props.questions[this.state.questionNum + 1].answer, fail: false}) 
        } else {
            this.setState({fail: true})
        }

    }

    handleChange(event) {
        this.setState({userAnswer: event.target.value})
    }

    handleRandomize(event) {
        event.preventDefault();
    }

    

    render() {

        let fail

        if (!this.state.fail) {
            fail = ""
        } else {
            fail = "Incorrect, please try again"
        }

        return(
            <div>Write your answer
                <p>Question number {this.state.questionNum}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                    {fail}
                </form>

                <button type="submit">Randomize question</button>
                
            </div>
        )
    }

}

export default QuestionsList;