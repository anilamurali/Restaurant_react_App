import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Restcard/Restcard.css'
import { Link } from 'react-router-dom';

function Restcard({restorents}) {
    console.log(restorents);
  return (
    <div>
        {
           <Link to={`/view/${restorents.id}`} style={{textDecoration:'none'}}>
            <Card  className='card'>
            <Card.Img className='image' variant="top" src={restorents.photograph} />
            <Card.Body>
              <Card.Title>{restorents.name}</Card.Title>
              <Card.Text style={{height:'50px'}}>
               Address: {restorents.address}
              </Card.Text>
              <Card.Text>
               Neighborhood: {restorents.neighborhood}
              </Card.Text>
              <Card.Text>
              Cuisine Type: {restorents.cuisine_type}
              </Card.Text>
              
              
            </Card.Body>
          </Card>
           </Link>
        
            
        }
       
    </div>
  )
}

export default Restcard