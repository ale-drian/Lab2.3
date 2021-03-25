import React from 'react'
import url_api from './global_variables.js'
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Image from 'react-bootstrap/Image';

class ProductDetail extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      producto: null,
      recuperado: false
    }
  }

  componentWillMount() {
    axios.get(url_api+'/productos/' + this.props.match.params.id)  //peticion
      .then((res) => {
        this.setState({
            producto: res.data,
            recuperado: true
        })
      })
  } 


  render() {
    if (this.state.recuperado)
      return this.mostrarDatos()
    else
      return (<div>Recuperando datos...</div>)
  }


  mostrarDatos() {
    return (
      <Container fluid className="mt-5" align="center">
        <Row>
          <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }} lg={{ span: 5, offset: 1 }}>
            <h1>{this.state.producto.nombre}</h1>
            <p className="display-4">S/. {this.state.producto.precio}</p>

            <p className="text-justify"><b>Código: </b>{this.state.producto.id}</p>
            <br/>
            <p className="text-justify">{this.state.producto.descripcion}</p>
            <p>{this.state.producto.stock}</p>
          </Col>
          <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }} lg={{ span: 5}}>
            <Image thumbnail src={url_api+this.state.producto.imagen}/>
          </Col>
        </Row>
        <Button  variant="info" className="mt-5 pr-4 pl-4" href={'/productos'}>Volver</Button>
      </Container>
    )
  }
}
export default ProductDetail;
