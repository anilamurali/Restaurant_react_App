import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import '../Viewrest/Viewrest.css'


function Viewrest() {
    // get path parameter
    const pathParameter=useParams()
    console.log(pathParameter);//object
    console.log(pathParameter.id);//id

    //destructure parameter
    const {id}=useParams()
    console.log(id);
  const [RestDetails,setRestDetails]= useState({})
    //API Call for grt particular restorant details
    const fetchData = async ()=>{
      const {data} = await axios.get(`http://localhost:3001/restaurants/${id}`) //destructuring
      console.log(data);//objct format data
      setRestDetails(data)
      
    }

    console.log(RestDetails);
    useEffect(()=>{
      fetchData() //function call
    },[])

  return (
    <div>
      <Row>
        <Col sm={12} md={6} lg={5} xl={5} className='img' >
        {/* image */}
        <img src={RestDetails.photograph} alt="image" style={{width:'400px',height:'500px',borderRadius:'10px'}} />
        </Col>
        <Col sm={12} md={6} lg={7} xl={7} className='list'>
        <ListGroup style={{width:'460px',margin:'10px',border:'1px solid grey'}}>
      <ListGroup.Item  style={{border:'1px solid grey'}}>{RestDetails.name}</ListGroup.Item>
      <ListGroup.Item style={{border:'1px solid grey'}}>{RestDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item style={{border:'1px solid grey'}}>{RestDetails.address}</ListGroup.Item>
      <ListGroup.Item style={{border:'1px solid grey'}}>{RestDetails.cuisine_type}</ListGroup.Item>
    </ListGroup>
        </Col>
      </Row>

    </div>
  )
}

export default Viewrest