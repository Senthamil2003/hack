import React, { Component } from 'react'
import "./qstn.css"
import { Link } from 'react-router-dom'

export default class Qstn4 extends Component {
    render() {
        function change() {
            let x = document.getElementsByClassName("sid")
            x.setAttribute("className", "democlass");
        }

        return (
            <div className='qs1'>
                <div className='qsdiv1'>
                    <p className='qsp1'>4. Plastics are poor conductor of ______</p>

                </div>
                <div className='option'>
                    <input type="radio" name="ans" />
                    <label className='ans'>Air</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans" />
                    <label className='ans'>Water</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans" />
                    <label className='ans'>Heat and Electricity</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans" />
                    <label className='ans'>None of these</label>

                </div>
                <div className='footer'>
                    <Link to="/test/main/qs3"> <button className='sbtn5' onClick={() => { change() }}>Previous</button></Link>
                    <Link to="/test/main/qs4">  <button className='sbtn7'>Next</button></Link>

                </div>



            </div>
        )
    }
}
