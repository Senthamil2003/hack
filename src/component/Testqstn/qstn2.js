import React, { Component } from 'react'
import "./qstn.css"
import { Link } from 'react-router-dom'

export default class Qstn2 extends Component {
    render() {
        return (
            <div className='qs1'>
                <div className='qsdiv1'>
                    <p className='qsp1'>2. ______ is the festival associated with harvest season.</p>

                </div>
                <div className='option'>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Dussehra</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Ganesh Chaturthi</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Balsakhi</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Christmas</label>

                </div>
                <div className='footer'>
                <Link to="/test/main/qs1"> <button className='sbtn5'>Previous</button></Link>
                <Link to="/test/main/qs3">  <button className='sbtn7'>Next</button></Link>

                </div>



            </div>
        )
    }
}
