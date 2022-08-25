import logo from "../../image/logo.png"

import Carosel from "../carosel/Carosel"
import time from "../../image/clock.png"
import book from "../../image/book.jpg"
import calander from "../../image/calander.png"
import customer from "../../image/customer.png"
import teacher from "../../image/teachers.jpg"
import student from "../../image/student.png"


import { Link, useLocation } from 'react-router-dom'
import "../../font/RockDeath.ttf"
import "./greet.css"


import React from 'react'
let ct1 = 0;
let ct2 = 0;
let ct3 = 0;
let ct4 = 0;
let ct5 = 0;



export default function Greet() {
  
    const para = {
        fontSize: '46px',
        fontWeight:"bold",
        textAlign: 'center',
        lineHeight: "56px",
        marginTop: "70px",
        marginLeft: "75px",
        color:"white",
        fontFamily: "sanSerif",
    }
    const para1 = {
        fontSize: '46px',
        fontWeight:"bold",
        textAlign: 'center',
        lineHeight: "56px",
        marginTop: "15px",
        marginLeft: "75px",
        color:"white",
        fontFamily: "Poppins",
    }



    const bdiv = {
        marginLeft: "31.5%",
        marginTop: "5%"
    }
    useLocation();

    function a1(ct) {
        if (ct === 'c1') {
            ct1 = 1;
            ct2 = 0
            ct3 = 0
            ct4 = 0
            ct5 = 0


        }
        if (ct === 'c2') {
            ct1 = 0;
            ct2 = 1
            ct3 = 0
            ct4 = 0
            ct5 = 0


        }
        if (ct === 'c3') {
            ct1 = 0;
            ct2 = 0
            ct3 = 1
            ct4 = 0
            ct5 = 0


        }
        if (ct === 'c4') {
            ct1 = 0;
            ct2 = 0
            ct3 = 0
            ct4 = 1
            ct5 = 0


        }
        if (ct === 'c5') {
            ct1 = 0;
            ct2 = 0
            ct3 = 0
            ct4 = 0
            ct5 = 1


        }

    }






    return (
        <div>
            <div className="gbody" >
                <div className='gn'>
                    <div>
                        <img src={logo} className="gimg1" alt="noimg" />
                    </div>
                    <div>
                        <ul className='list'>
                            <div onClick={() => { a1('c1') }} className={(ct1 === 1) ? 'listitem-active' : "cont"} >
                                <a href='#div1' onClick={() => { a1('c1') }} className={(ct1 === 1) ? 'listitem1' : "listitem"}>Home</a>
                            </div>
                            <div onClick={() => { a1('c2') }} className={(ct2 === 1) ? 'listitem-active' : "cont"}>
                                <a href='#div2'onClick={() => { a1('c2') }} className={(ct2 === 1) ? 'listitem1' : "listitem"}>Student</a>
                            </div>
                            <div onClick={() => { a1('c3') }} className={(ct3 === 1) ? 'listitem-active' : "cont"}>
                                <a href='#div3' onClick={() => { a1('c3') }} className={(ct3 === 1) ? 'listitem1' : "listitem"}>Teachers</a>
                            </div>
                            <div onClick={() => { a1('c4') }} className={(ct4 === 1) ? 'listitem-active' : "cont"}>
                                <a href='#div4' onClick={() => { a1('c4') }} className={(ct4 === 1) ? 'listitem1' : "listitem"} >Report</a>

                            </div>
                            <div nClick={() => { a1('c5') }} className={(ct5 === 1) ? 'listitem-active' : "cont"}>
                                <a href='#div5' onClick={() => { a1('c5') }} className={(ct5 === 1) ? 'listitem1' : "listitem"}>Courses</a>
                            </div>





                        </ul>
                    </div>




                </div>
                <div className="sample"></div>
                <div className='tot' id="div1">
                    
                    <div className='div1'>

                     

                    </div>
                    <div className='div2'>

                        <p style={para} >"LEARNING TODAY,</p>
                        <p style={para1} >LEADING TOMORROW!"</p>

                        <div style={bdiv}>

                            <Link to="/signup"> <button className='b2'>Login</button></Link>
                        </div>
                    </div>
                </div>

                <div className='div3' id="div2">

                    <div className="td1">
                    <h1 className="th1">MATERIALS</h1>
                        <p className="tp1">We are providing personalized learning materials based on the student hobbies and their interest and
                            the students can also be able to made their own choice for selecting their course and it is available in audio video and in text format
                        </p>
                    </div>
                    <div className="td2"><Carosel /></div>



                </div>


                <div className='div4' id="div3">
                    <h1 className="fh1">BENEFITS</h1>
                    <div className="ftdiv">
                        <div className="fdiv">
                            <img src={book} className="fimg1" alt="noimg" />
                            <p className="fp1">Quality Education</p>

                        </div>
                        <div className="fdiv">
                            <img src={time} className="fimg1" alt="noimg" />
                            <p className="fp2">Reduce Time</p>

                        </div>
                        <div className="fdiv">
                            <img src={calander} className="fimg1" alt="noimg" />
                            <p className="fp3">Personalized Schedule</p>

                        </div>
                        <div className="fdiv">
                            <img src={customer} className="fimg1" alt="noimg" />
                            <p className="fp4">Best customer service</p>

                        </div>
                    </div>

                </div>
                <div className='div5' id="div4"> 
                <h1 className="fih1">TEACHERS</h1>
                    <div className="fidiv1">
                      
                        <img src={teacher} className="fiimg1" alt="noimg" />

                    </div>
                    <div className="fidiv2">
                        <p className="fip1">We are assessing teachers and guide them to be a better one in their carrere,With our website they will shine in their carreer</p>

                    </div>

                </div>

                <div className='div6' id="div5">
                <h1 className="siih1">STUDENTS</h1>
                <div className="sidiv1">
                <p className="fip1">We are assessing teachers and guide them to be a better one in their carrere,With our website they will shine in their carreer</p>
 
                      

                  </div>
                  <div className="sidiv2">
                  <img src={student} className="siimg1" alt="noimg" />
                     
                  </div>


                </div>
                <div className="div7">
                    <div className="foot">
                        <div className="sfoot">
                          <h3 className="fth1">Contact</h3>
                          <p className="ftp1">Phone:123-344-9891</p>
                          <p className="ftp1">Email:abc@gmail.com</p>
                          <p className="ftp1">Whatsapp:8000-112-112</p>
                        </div>
                        <div className="sfoot">
                        <h3 className="fth1">About</h3>
                          <p className="ftp1">The main goal is to made the education easy for both the student and teachers in elegant manner</p>
                          

                        </div>
                        <div className="sfoot">
                        <h3 className="fth1">Services</h3>
                          <p className="ftp1">24/7 customer service</p>
                          <p className="ftp1">Quality Education</p>
                          <p className="ftp1">Personalized schedule</p>

                        </div>
                        <div className="sfoot">
                        <h3 className="fth1">Address</h3>
                          <p className="ftp1">RSM Nagar, Gummidipoondi, Taluk, Kavaraipettai, Tamil Nadu 601206</p>
                          

                        </div>
                        

                    </div>

                </div>
               

            </div>
        

        </div>
    )
}