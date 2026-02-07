import React, { Component } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export class Link extends Component {
  render() {
    return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="หน้าหลัก"></Tab>
      <Tab eventKey="profile" title="หมวดหมู่"></Tab>
      <Tab eventKey="contact" title="เกี่ยวกับเรา" ></Tab>
      <Tab eventKey="All" title="รายการทั้งหมด" ></Tab>
      <Tab eventKey="review" title="รีวิวจากลูกค้า" ></Tab>
      <Tab eventKey="aboutme" title="เกี่ยวกับเรา" ></Tab>
    </Tabs>
    );
  }
}

export default Link