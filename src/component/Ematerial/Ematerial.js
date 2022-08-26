import React, { Component } from 'react'
import d1 from "../../image/math3.jpeg"
import demo from "../../image/courseimg3.jpeg"
import demo1 from "../../image/courseimg2.jpeg"
import demo2 from "../../image/courseimg1.jpeg"
import "./materials.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Matdisp extends Component {
    render() {
        return (
           
        
            <div>
             <p className='matp1'>English</p>
            
              <div className='cardgrp'>
            
            <div className='cards'>        
             <Card style={{ width: '18rem',borderRadius:"18px",boxShadow:"rgba(185, 185, 186, 0.3) 3px 3px 3px 3px" }}>
               <Card.Img variant="top" src={d1}style={{borderRadius:"18px",height:"190px"}} alt="noimg" />
               <Card.Body style={{borderRadius:"8px",marginLeft:"10px"}}>
                 <Card.Title>Number System</Card.Title>
                 <Card.Text>
                   <div style={{float:'left'}}><img src={demo} style={{width:"10px",marginLeft:"-7px",marginTop:"-3px",marginRight:"3px"}} alt="noimg"/></div>
                   16 videos and practice exercises<br/>
                   <div style={{float:'left'}}><img src={demo1} style={{width:"10px",marginLeft:"-7px",marginTop:"-3px",marginRight:"3px"}}alt="noimg"/></div>
                   3 hrs 37 mins<br/>
                   <div style={{float:'left'}}><img src={demo2} style={{width:"15px",marginLeft:"-10px",marginTop:"-3px",marginRight:"3px"}} alt="noimg"/></div>
                   Full time access
                 </Card.Text>
                 <Button variant="primary" style={{borderRadius:"8px",marginLeft:"55px",marginBottom:"10px",marginTop:"10px"}}>Start this course </Button>
               </Card.Body>
             </Card>
             </div>

             <div className='cards1'>        
             <Card style={{ width: '18rem',borderRadius:"18px",boxShadow:"rgba(185, 185, 186, 0.3) 3px 3px 3px 3px" }}>
               <Card.Img variant="top" src={d1} style={{borderRadius:"18px",height:"190px"}} alt="noimg"/>
               <Card.Body style={{borderRadius:"8px",marginLeft:"10px"}}>
                 <Card.Title>Algebra</Card.Title>
                 <Card.Text>
                   <div style={{float:'left'}}><img src={demo} style={{width:"10px",marginLeft:"-7px",marginTop:"-3px",marginRight:"3px"}} alt="noimg"/></div>
                   16 videos and practice exercises<br/>
                   <div style={{float:'left'}}><img src={demo1} style={{width:"10px",marginLeft:"-7px",marginTop:"-3px",marginRight:"3px"}} alt="noimg"/></div>
                   3 hrs 37 mins<br/>
                   <div style={{float:'left'}}><img src={demo2} style={{width:"15px",marginLeft:"-10px",marginTop:"-3px",marginRight:"3px"}} alt="noimg"/></div>
                   Full time access
                 </Card.Text>
                 <Button variant="primary" style={{borderRadius:"8px",marginLeft:"55px",marginBottom:"10px",marginTop:"10px"}}>Start this course </Button>
               </Card.Body>
             </Card>
             </div>

             <div className='cards1'>        
             <Card style={{ width: '18rem',borderRadius:"18px",boxShadow:"rgba(185, 185, 186, 0.3) 3px 3px 3px 3px" }}>
               <Card.Img variant="top" src={d1} style={{borderRadius:"18px",height:"190px"}} alt="noimg"/>
               <Card.Body style={{borderRadius:"8px",marginLeft:"10px"}}>
                 <Card.Title>Trigonometry</Card.Title>
                 <Card.Text>
                   <div style={{float:'left'}}><img src={demo} style={{width:"10px",marginLeft:"-7px",marginTop:"-3px",marginRight:"3px"}} alt="noimg"/></div>
                   16 videos and practice exercises<br/>
                   <div style={{float:'left'}}><img src={demo1} style={{width:"10px",marginLeft:"-7px",marginTop:"-3px",marginRight:"3px"}} alt="noimg"/></div>
                   3 hrs 37 mins<br/>
                   <div style={{float:'left'}}><img src={demo2} style={{width:"15px",marginLeft:"-10px",marginTop:"-3px",marginRight:"3px"}} alt="noimg"/></div>
                   Full time access
                 </Card.Text>
                 <Button variant="primary" style={{borderRadius:"8px",marginLeft:"55px",marginBottom:"10px",marginTop:"10px"}}>Start this course </Button>
               </Card.Body>
             </Card>
             </div>
            
         </div> 
            </div>
                );
              }
              
    }