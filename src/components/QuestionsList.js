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
        this.handleRandomize = this.handleRandomize.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        // if the answer is correct go to the folowing one, otherwise don't move
        if (this.state.answer.toLowerCase() === this.state.userAnswer.toLowerCase()) {
            let questionNum = this.state.questionNum;
            if (questionNum >= this.props.questions.length) {
                questionNum = 0
            }
           this.setState({questionNum: questionNum + 1, answer: this.props.questions[questionNum].answer, fail: false}) 
        } else {
            this.setState({fail: true})
        }

    }

    handleChange(event) {
        this.setState({userAnswer: event.target.value})
    }

    handleRandomize(event) {
        event.preventDefault();

        function generateRandomNumber(min, max) {
            let random_number = Math.random() * (max - min) + min;
            return Math.floor(random_number);
        }

        const number = generateRandomNumber(0, this.props.questions.length);
    
        this.setState({questionNum: number + 1, answer: this.props.questions[number].answer, fail: false})
        
        
    }

    

    render() {

        let fail

        if (!this.state.fail) {
            fail = ""
        } else {
            fail = <h3> "Incorrect, please try again" </h3>
        }

        return(
            <div>
                <h2> Write your answer </h2>
                <h3>Question number {this.state.questionNum}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                    {fail}
                </form>

                <form type="submit" onSubmit={this.handleRandomize}>
                <button type="submit">Randomize question</button>
                </form>
                
            </div>
        )
    }

}

export default QuestionsList;