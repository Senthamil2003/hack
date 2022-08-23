import React, { Component } from 'react'
import Pie from './piegraph'
import Graph from './quadrantgraph'
import "./report.css"


export default class Report extends Component {
  render() {
    return (
      <div className='reportcont'>
        <p className='rp1'>Feedback</p>
        <div className='gph1'>
          <Graph />
        </div>
        <div className='gph2'>
        <p className='rp1'>Student Marks</p>
          <Pie />
        </div>

      </div>
    )
  }
}
