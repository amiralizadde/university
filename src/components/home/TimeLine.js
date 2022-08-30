import React, { useState } from 'react'
import DataHistory from '../../data/DataHistory'
import TimelineItem from './TimelineItem'
import {Col, Container, Row}from 'react-bootstrap'

export default function TimeLine() {
    const [dataHistory , setDataHistory] = useState(DataHistory)
  return (
     <Container fluid style={{backgroundColor:"rgba(0,0,0,0.7)"}}>
         <p className="text-center fw-bolder text-light" style={{fontSize:"80px"}}>History</p>
          <p className="text-center text-light">The history of the Optics Research Group since 1947.</p>
             {
                dataHistory.map(item=>(
                    <TimelineItem key={item.id} {...item} />
                )) 
             }
       
     </Container>
  )
}
