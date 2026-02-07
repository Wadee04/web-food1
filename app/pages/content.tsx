import React, { Component } from 'react'
import { Container } from "react-bootstrap";
import { Col, Row, Stack, Image, Button, Card, Placeholder } from "react-bootstrap";

export class Content extends Component {
  render() {
    return (
      <div className="d-flex justify-content-around">
      <Card style={{ width: '100rem' }}>
        <Card.Img variant="top" src="public/image/spagetty.jpg" style={{height:'300px', width:'1294px', objectFit:'cover'}}/>
        <Card.Body>
          <Card.Title>สปาเก็ตตี้คาโบนาร่า</Card.Title>
          <Card.Text>
            สปาเก็ตตี้เมนูยอดฮิต ใครมาต้องสั่ง
            เมนูขายดีอันดับ 1 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    );
  }
}

export default Content