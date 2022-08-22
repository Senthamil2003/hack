import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../image/logo.png"
import "./maintest.css"
import tstclr from "../../image/testcolor.png"

export default class Testside extends Component {
    render() {
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


                        <div className='sidehold'><Link to="/answer"> <div className='circle1'><p className='ttxt1'>1</p></div></Link></div>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt1'>2</p></div></Link></div>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt1'>3</p></div></Link></div>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt1'>4</p></div></Link></div>
                    </div>
                    <div className='sidecont'>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt1'>5</p></div></Link></div>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt1'>6</p></div></Link></div>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt1'>7</p></div></Link></div>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt1'>8</p></div></Link></div>
                    </div>
                    <div className='sidecont'>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt1'>9</p></div></Link></div>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt2'>10</p></div></Link></div>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt2'>11</p></div></Link></div>
                        <div className='sidehold'><Link to="/answer"> <div className='circle'><p className='ttxt2'>12</p></div></Link></div>
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
