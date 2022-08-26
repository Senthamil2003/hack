import React, { Component } from 'react'
import "./tstcard.css"
import Button from 'react-bootstrap/Button';
import test from "../../image/feedback.jpeg"
import { Link } from 'react-router-dom';
export default class Feedbackreport extends Component {
    render() {
        return (
            <div className='rhome'>
                <div className='rbtncont'>
                    <Link to="/student/acadamicscard"><button className='rb3'>Acadamics</button></Link>
                
                <button className='rb2'>feedback</button>
                
                   
                </div>
                <div className='rcont'>
                <div className='tstcard'>
                   <img src={test} alt="noimg" className='rimg1'/>
                   <p className='rp1'>Regular Knowledge Assesment(English)</p>
                   <p className='rp2'>8-Aug-2022 09:00 am to 10:00 am</p>
                   <Link to="/student/acadamicscard/report">
                   <Button variant="primary" className='rb1'>View report </Button>
                   </Link>
                </div>
                <div className='tstcard'>
                   <img src={test} alt="noimg" className='rimg1'/>
                   <p className='rp1'>Regular Knowledge Assesment(English)</p>
                   <p className='rp2'>8-Aug-2022 09:00 am to 10:00 am</p>
                   <Link to="/student/acadamicscard/report">
                   <Button variant="primary" className='rb1'>View report </Button>
                   </Link>
                </div>
                <div className='tstcard'>
                   <img src={test} alt="noimg" className='rimg1'/>
                   <p className='rp1'>Regular Knowledge Assesment(English)</p>
                   <p className='rp2'>8-Aug-2022 09:00 am to 10:00 am</p>
                   <Link to="/student/acadamicscard/report">
                   <Button variant="primary" className='rb1'>View report </Button>
                   </Link>
                </div>
                </div>
               
            </div>
        )
    }
}
