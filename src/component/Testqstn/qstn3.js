import React, { Component } from 'react'
import "./qstn.css"
import { Link } from 'react-router-dom'
export default class Qstn3 extends Component {
    render() {
        return (
            <div className='qs1'>
                <div className='qsdiv1'>
                    <p className='qsp1'>3. Which one of the following is NOT a source of Water for irrigation.</p>

                </div>
                <div className='option'>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Tubewells</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Dams</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Lakes</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Oceans</label>

                </div>
                <div className='footer'>
                <Link to="/test/main/qs2"> <button className='sbtn5'>Previous</button></Link>
                <Link to="/test/main/qs4">  <button className='sbtn7'>Next</button></Link>

                </div>



            </div>
        )
    }
}
