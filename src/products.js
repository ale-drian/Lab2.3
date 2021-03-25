import React from 'react'
import url_api from './global_variables.js'
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class Products extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          productos: [],
          recuperado: false
        }
      }
    
      componentWillMount() {
        axios.get(url_api+'/productos/')  //peticion
          .then((res) => {
            this.setState({
                productos: res.data,
                recuperado: true
            })
          })
      } 

      removerTexto(string){
        if(string.length>=60){
          let nuevo = string.substr(0,60);
          nuevo += " . . .";
          return nuevo;
        }
        return string;
      }
    
      render() {
        if (this.state.recuperado)
          return this.mostrarTabla()
        else
          return (<div>Recuperando datos...</div>)
      }
    
      mostrarTabla() {
        return (
          <Container className="mt-5">
            <Row>
            {this.state.productos.map((prod, index) => {
              return (
                <Col lg={3} md={4} sm={6} xs={12} key={index}>
                  <Card className="mt-3 mb-3">
                    <Card.Img variant="top" src={url_api+prod.imagen}  className="border-bottom"/>
                    <Card.Body>
                      <Card.Title>{prod.nombre}</Card.Title>
                      <Card.Text className="text-justify">
                        { this.removerTexto(prod.descripcion) }
                      </Card.Text>
                      <Button className="float-right" variant="info" href={'/productos/' + prod.id}>Ver detalles</Button>
                    </Card.Body>
                  </Card>
                </Col>
                )
              })}
            </Row>
          </Container>
        );
      }
}
export default Products;
