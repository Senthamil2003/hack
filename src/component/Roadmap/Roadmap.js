import React, { Component } from 'react'
import "./Roadmap.css"
import roadmap from '../../image/roadmapenhanced.jpeg'

export default class Roadmap extends Component {
  render() {
 
      function showverbal(){
        document.getElementById("ver").innerHTML="Strong in verbal communication can improve spraking skills";
      }

      function hideverbal()
      {
        document.getElementById("ver").innerHTML="Verbal Communication";
      }

      function showphy(){
        document.getElementById("phy").innerHTML="Strong in verbal communication can improve spraking skills";
      }

      function hidephy()
      {
        document.getElementById("phy").innerHTML="Physics";
      }  

      function showche(){
        document.getElementById("che").innerHTML="Strong in verbal communication can improve spraking skills";
      }

      function hideche()
      {
        document.getElementById("che").innerHTML="Chemistry";
      }

      function showmat(){
        document.getElementById("mat").innerHTML="Strong in verbal communication can improve spraking skills";
      }

      function hidemat()
      {
        document.getElementById("mat").innerHTML="Mathematics";
      }

      function showtar(){
        document.getElementById("tar").innerHTML="Strong in verbal communication can improve spraking skills";
      }

      function hidetar()
      {
        document.getElementById("tar").innerHTML="Cognitive";
      }

    return(
      <div className='rphome'>
        <div>
            <img src={roadmap} className="roadmapimgcss" alt='roadmap' />
        </div>
        <div className='verbaldiv'>
          <h3 className='vc' id='ver' onMouseEnter={() => {showverbal()}} onMouseLeave={() => {hideverbal()}}>Verbal Communication</h3>
        </div>
        <h3 className='ph' id='phy' onMouseEnter={() => {showphy()}} onMouseLeave={() => {hidephy()}}>Physics</h3>
        <h3 className='ch' id='che' onMouseEnter={() => {showche()}} onMouseLeave={() => {hideche()}}>Chemistry</h3>
        <h3 className='am' id='mat' onMouseEnter={() => {showmat()}} onMouseLeave={() => {hidemat()}}>Mathematics</h3>
        <h3 className='ta' id='tar' onMouseEnter={() => {showtar()}} onMouseLeave={() => {hidetar()}}>Cognitive</h3>
      </div>
    )
  }
}
