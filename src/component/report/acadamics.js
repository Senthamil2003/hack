import React, { Component } from 'react'
import "./tstcard.css"
import Button from 'react-bootstrap/Button';
import test1 from "../../image/englishcard.jpg"
import test2 from "../../image/physicscard.jpg"
import test3 from "../../image/chemistrycard.jpg"
import test4 from "../../image/mathsreport.jpg"
import test5 from "../../image/biologycard.jpg"
import { Link } from 'react-router-dom';
export default class Acadamicsreport extends Component {
    render() {
        return (
            <div className='rhome'>
                <div className='rbtncont'>
                <button className='rb2'>Acadamics</button>
                <Link to="/student/acadamicscard/feedbackcard"><button className='rb3'>feedback</button></Link>
                
                   
                </div>
                <div className='rcont'>
                <div className='tstcard'>
                   <img src={test1} alt="noimg" className='rimg1'/>
                   <p className='rp1'>Regular Knowledge Assesment(English)</p>
                   <p className='rp2'>8-Aug-2022 09:00 am to 10:00 am</p>
                   <Link to="/student/acadamicscard/feedbackcard/report">
                   <Button variant="primary" className='rb1'>View report </Button>
                   </Link>

                </div>
                <div className='tstcard'>
                   <img src={test2} alt="noimg" className='rimg1'/>
                   <p className='rp1'>Regular Knowledge Assesment(English)</p>
                   <p className='rp2'>8-Aug-2022 09:00 am to 10:00 am</p>
                   <Link to="/student/acadamicscard/feedbackcard/report">
                   <Button variant="primary" className='rb1'>View report </Button>
                   </Link>

                </div>
                <div className='tstcard'>
                   <img src={test3} alt="noimg" className='rimg1'/>
                   <p className='rp1'>Regular Knowledge Assesment(English)</p>
                   <p className='rp2'>8-Aug-2022 09:00 am to 10:00 am</p>
                   <Link to="/student/acadamicscard/feedbackcard/report">
                   <Button variant="primary" className='rb1'>View report </Button>
                   </Link>

                </div>
                
                
                </div>
                <div className='rcont'>
                <div className='tstcard'>
                   <img src={test4} alt="noimg" className='rimg1'/>
                   <p className='rp1'>Regular Knowledge Assesment(English)</p>
                   <p className='rp2'>8-Aug-2022 09:00 am to 10:00 am</p>
                   <Link to="/student/acadamicscard/feedbackcard/report">
                   <Button variant="primary" className='rb1'>View report </Button>
                   </Link>

                </div>
                <div className='tstcard'>
                   <img src={test5} alt="noimg" className='rimg1'/>
                   <p className='rp1'>Regular Knowledge Assesment(English)</p>
                   <p className='rp2'>8-Aug-2022 09:00 am to 10:00 am</p>
                   <Link to="/student/acadamicscard/feedbackcard/report">
                   <Button variant="primary" className='rb1'>View report </Button>
                   </Link>

                </div> 
                </div>
                
               
            </div>
        )
    }
}
