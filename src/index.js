import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import App from './App';
import Users from './users';
import Contact from './contact';
import Products from './products';
import ProductDetail from './product_detail';
import Notfound from './notfound';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import { withRouter } from "react-router";

const Header = props => {
  const { location } = props;
  return (
    <Navbar bg="warning" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={location.pathname} className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/usuarios/10">
            <Nav.Link>Users</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contacto">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/productos">
            <Nav.Link>Productos</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const HeaderWithRouter = withRouter(Header);


const routing = (
  <Router>
    <HeaderWithRouter />
    <Switch>
      <Route exact path="/home" component={App} />
      <Route path="/usuarios/:id" component={Users} />
      <Route path="/contacto" component={Contact} />
      <Route exact path="/productos" component={Products} />
      <Route exact path="/productos/:id" component={ProductDetail} />
      <Route component={Notfound} />
    </Switch>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


