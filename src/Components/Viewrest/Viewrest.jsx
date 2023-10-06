import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import '../Viewrest/Viewrest.css'
import Restop from '../Restop/Restop';
import Restreview from '../Restreview/Restreview';


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
      <ListGroup.Item  style={{border:'1px solid grey'}}>Name:{RestDetails.name}</ListGroup.Item>
      <ListGroup.Item style={{border:'1px solid grey'}}>Neighborhood:{RestDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item style={{border:'1px solid grey'}}>Address:{RestDetails.address}</ListGroup.Item>
      <ListGroup.Item style={{border:'1px solid grey'}}>Cuisine type:{RestDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item style={{border:'1px solid grey'}}><Restop op={RestDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item style={{border:'1px solid grey'}}><Restreview review={RestDetails.reviews}/></ListGroup.Item>

    </ListGroup>
        </Col>
      </Row>

    </div>
  )
}

export default Viewrest