import React, { Component } from 'react'
import "./qstn.css"

export default class Qstn1 extends Component {
    render() {
        return (
            <div className='qs1'>
                <div className='qsdiv1'>
                    <p className='qsp1'>What is the basic unit of our neural system?</p>

                </div>
                <div className='option'>
                    <input type="radio" name="ans"/>
                    <label className='ans'>neutron</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>neuron</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>nephron</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>neuclotron</label>

                </div>



            </div>
        )
    }
}
