import React, { Component } from 'react'
import { Container } from "react-bootstrap";
import Footer from './footer';
import Menu from './menu'
import Top from './top';
import Link from './link';
import Content from './content';
import Drink from './drink';

export class Index extends Component {
  render() {
    return (
      <Container>
        <Top></Top>
        <Link></Link>
        <Content></Content>
        <Menu></Menu>
        <Drink></Drink>
        <Footer></Footer>
      </Container >
    );
  }
}

export default Index