import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../image/logo.png"
import "./maintest.css"
import tstclr from "../../image/testcolor.png"

export default class Testside extends Component {

    render() {

        let {questions} = this.props
        return (
            <div className='tottst'>
                <div className='nav1'>
                    <div className='nimg'>
                        <img src={logo} alt="hi" className='img1' />
                    </div>
                    <div className='timecont'>
                        <div className='ttxt'>
                            Time Left
                        </div>
                    <div className='tbg'>
                        <p className='tp'>0</p>
                    </div>
                    <div className='tbg'>
                        <p className='tp'>1</p>
                    </div>
                    <div className='tcol'>
                        :
                    </div>
                    <div className='tbg'>
                        <p className='tp'>1</p>
                    </div>
                    <div className='tbg'>
                        <p className='tp'>2</p>
                    </div>
                    <div className='tcol'>
                        :
                    </div>
                    <div className='tbg'>
                        <p className='tp'>5</p>
                    </div>
                    <div className='tbg'>
                        <p className='tp'>5</p>
                    </div>

                </div>
                    <div>
                        <button className='sbtn8'>Submit</button>
                    </div>


                </div>
                <div className='tside'>
                    <h3 className='sideh1'>Question overview</h3>
                    <div className='sidecont'>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(1)} className={"circle" + (questions[0].state === "visited"? 1 : (questions[0].state === "answered" ? 2 : ""))}><p className='ttxt1'>1</p></div></div>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(2)} className={"circle" + (questions[1].state === "visited"? 1 : (questions[1].state === "answered" ? 2 : ""))}><p className='ttxt1'>2</p></div></div>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(3)} className={"circle" + (questions[2].state === "visited"? 1 : (questions[2].state === "answered" ? 2 : ""))}><p className='ttxt1'>3</p></div></div>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(4)} className={"circle" + (questions[3].state === "visited"? 1 : (questions[3].state === "answered" ? 2 : ""))}><p className='ttxt1'>4</p></div></div>
                    </div>
                    <div className='sidecont'>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(5)} className={"circle" + (questions[4].state === "visited"? 1 : (questions[4].state === "answered" ? 2 : ""))}><p className='ttxt1'>5</p></div></div>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(6)} className={"circle" + (questions[5].state === "visited"? 1 : (questions[5].state === "answered" ? 2 : ""))}><p className='ttxt1'>6</p></div></div>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(7)} className={"circle" + (questions[6].state === "visited"? 1 : (questions[6].state === "answered" ? 2 : ""))}><p className='ttxt1'>7</p></div></div>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(8)} className={"circle" + (questions[7].state === "visited"? 1 : (questions[7].state === "answered" ? 2 : ""))}><p className='ttxt1'>8</p></div></div>
                    </div>
                    <div className='sidecont'>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(9)} className={"circle" + (questions[8].state === "visited"? 1 : (questions[8].state === "answered" ? 2 : ""))}><p className='ttxt1'>9</p></div></div>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(10)} className={"circle" + (questions[9].state === "visited"? 1 : (questions[9].state === "answered" ? 2 : ""))}><p className='ttxt2'>10</p></div></div>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(11)} className={"circle" + (questions[10].state === "visited"? 1 : (questions[10].state === "answered" ? 2 : ""))}><p className='ttxt2'>11</p></div></div>
                        <div className='sidehold'><div onClick={() => this.props.handleQuestionChange(12)} className={"circle" + (questions[11].state === "visited"? 1 : (questions[11].state === "answered" ? 2 : ""))}><p className='ttxt2'>12</p></div></div>
                    </div>
                    <br />
                    
                    <hr className='line1'></hr>
                   
                    <img src={tstclr} alt="hi" className='tstimg4' />
                    <div className='tstbtncont'>
                    <button className='sbtn1'>Instructions</button>
                    <button className='sbtn3'>Mark as Review</button>
                    <button className='sbtn2'>Submit</button>
                    </div>


                 
                    


                </div>
                <div className='sectoincont'>
                <button className='sbtn9'>Acadamics</button>
                    <button className='sbtn10'>Cognitive</button>


                </div>
                <div className='tstline2'>
                    <hr></hr>
                </div>
                <hr className='tline1'></hr>
                <div className='footer'>
                    <button className='sbtn5'>Previous</button>
                    <button className='sbtn6'>Ckear section</button>
                    <button className='sbtn7'>Next</button>

                </div>
            

            </div>
        )
    }
}
