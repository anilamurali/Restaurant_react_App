import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function Restreview({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <div >
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
         {
            review?.map((item)=>(

            <div>
                <h5>Name:{item.name}</h5>
                <h6>date:{item.date}</h6>
                <h6>Rating:{item.date}</h6>

            </div>                

            ))
         }
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Restreview