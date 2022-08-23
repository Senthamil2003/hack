import React, { Component } from 'react'
import "./qstn.css"
import Testside from "../teststatic/testside"

export default class Questions extends Component {

    state = {
        questions: [...Array(12)].map((_, i) => {return {
                    question: "What is the basic unit of our neural system?",
                    options: ["neutron", "neuron", "nephron", "neuclotron"],
                    state: "unvisited",
                    questionNumber: i+1}}),

        currentQuestionNumber: 1
    }

    handleQuestionChange = (e) => {
        let questionsCopy = [...this.state.questions]
        let question = questionsCopy.find(item => item.questionNumber === e)
        let index = questionsCopy.indexOf(question)
        questionsCopy[index].state = "visited"
        this.setState({questions: questionsCopy})
    }

    render() {
        let question = this.state.questions[this.state.currentQuestionNumber - 1]
        console.log(this.state.questions)
        return (
            <React.Fragment>
                <Testside handleQuestionChange={this.handleQuestionChange} questions={this.state.questions}/>
                {question?  <div className='qs1' key={question}>
                    <div className='qsdiv1'>
                        <p className='qsp1'>{question.question}</p>
                    </div>
                    <div className='option'>
                        {question.options.map((option, index)=>(
                            <React.Fragment key={option}>
                                <input type="radio" name="ans"/>
                                <label className='ans'>{option}</label>
                                <br></br>
                                <br></br>
                            </React.Fragment>
                        ))}
                    </div>
                </div> : null}
                
            </React.Fragment>
        )
    }
}
