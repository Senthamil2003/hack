import React, { Component } from 'react'
import logo from "../../image/logo.png"
import { Link} from 'react-router-dom'
import "./test.css"

export default class Test extends Component {
    render() {
        return (
            <div>
                <div className='nav1'>
                    <img src={logo} alt="hi" className='tstimg1' />

                </div>
                <div className='body'>
                    <div className='d1'>
                        <h1 className='th1'>Instruction!</h1>
                        <ul className='tsl'>
                            <li className='tstli'>Fill up your personal details carefully.

                            </li>
                            <li className='tstli'>All questions are compulsory.

                            </li>
                            <li className='tstli'>Try to submit the paper in 40-45 minutes.

                            </li>
                            <li className='tstli'>You are allowed to submit only once, make sure that you have correctly attempted all the questions before submission.

                            </li>
                            <li className='tstli'>Make sure you clicked on submit button to successfully complete the test.

                            </li>

                        </ul>
                    </div>
                    <div className='d2'>
                        <div className='tl1'></div>
                        <div className='tstcont'>
                            <h3 className='th2'>Overview</h3>
                            <hr className='line1'></hr>
                            <div className='tcont'>
                                <div className='thold'>
                                    <p className='hh1'>Questions</p>
                                    <hr className='line2'/>
                                    <p className='hp1'>25</p>
                                </div>
                                <div className='thold'>
                                    <p className='hh1'>Sections</p>
                                    <hr className='line2'/>
                                    <p className='hp1'>2</p>

                                </div>
                                <div className='thold'>
                                    <p className='hh1'>Duration</p>
                                    <hr className='line2'/>
                                    <p className='hp1'>30min</p>

                                </div>
                                <div className='thold'>
                                    <p className='hh1'>Mark</p>
                                    <hr className='line2'/>
                                    <p className='hp1'>25</p>
                                </div>
                                
                            </div>
                            <hr className='line1'></hr>

                       

                        </div>
                        <div className='tl1'></div>
                        <Link to="/test/main/qs1"><button className='tstbtn'>Start Test</button></Link>
                        


                    </div>

                </div>
            </div>
        )
    }
}