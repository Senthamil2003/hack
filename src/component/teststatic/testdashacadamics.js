import React, { Component } from 'react'
import "./test.css"
import test from "../../image/test.png"
import { Link } from 'react-router-dom'

export default class Testdash extends Component {

    state = {
        assessments: ["English", "Maths", "Physics", "Chemistry"]
    }
    render() {
        return (
            <div className='thome1'>
                <div className='tstcat'>
                   <button className='tdb1'>Acadamics</button>
                   <Link to="/student/acadamics/feedback"><button className='tdb2'>Feedback</button></Link>
                   
                </div>
                {this.state.assessments.map((assessment, index) => (
                      <div className='tdcont'>
                        <div className='tdtst'>
                            <img src={test} alt="hi" className='tdimg1'/>
                            <div className='tdtxt'>
                            <p className='tdtstp1'>{"Regular Knowledge Assement (" + assessment + ")"} </p>
                            <p className='tdtstp2'>8-Aug-2022 09:00 am to  10:00 am</p>
                            <Link to="/test/beforetst"><button className='tdb3'>Take Test</button></Link> 
                            </div>
                      </div>
                  </div>
                ))}
            </div>
        )
    }
}
