import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Restcard from '../Restcard/Restcard'; //import child component in the parent component
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Allrest() {
  //state for hold api data as in the form of array
  const [allRestorent,setAllRestorent]=useState([]);
  //create an async function to fetch data and import axios library
  // then fetch the data
  const fetchData =async()=>{
      const response = await axios.get('http://localhost:3001/restaurants')
      console.log(response.data);
      setAllRestorent(response.data)
  }
    useEffect(()=>{
      fetchData() // function call
    },[])
    console.log(allRestorent);
  return (
    <div>
      <Row>
      {
        allRestorent.map((item)=>(
          <Col  sm={12} md={6} lg={4} xl={3}>
           {/* passing to the child */}
          <Restcard restorents={item}/> 
          
          </Col>
          ))
      }
      </Row>
     
    </div>
  )
}

export default Allrest