import React, { Component } from 'react'
import "./test.css"
import test from "../../image/test.png"
import { Link } from 'react-router-dom'

export default class Feedback extends Component {
    render() {
        return (
            <div className='thome1'>
                <div className='tstcat'>
                <Link to="/student/acadamics"> <button className='tdb2'>Acadamics</button></Link>
                   <button className='tdb1'>Feedback</button>
                </div>
                {[...Array(3)].map((item, index) => (
                    <div className='tdcont' key={item}>
                        <div className='tdtst'>
                            <img src={test} alt="hi" className='tdimg1'/>
                            <div className='tdtxt'>
                            <p className='tdtstp1'>{"Feedback Assessment " + (index+1)}</p>
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
