import logo from './logo.svg';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Cfts from './ListCFTs/ListCFTs';
import { useState } from 'react';
import CreateCfts from './CreateCFTs/CreateCFTs';

function App() {
  const [activeComponent, setActiveComponent] = useState('LIST_CFT')
  return (
    <div className="App">
      <Jumbotron>
        <h1>AWS Manager</h1>
        <p>
          Personal Dashboard
  </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>setActiveComponent('CREATE_CFT')}>Create</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sepaårated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {
        activeComponent === 'LIST_CFT' ? 
          (<Cfts></Cfts>) : null
      }
      {
        activeComponent === 'CREATE_CFT' ?
        (<CreateCfts></CreateCfts>) : null  
      }
    </div>
  );
}

export default App;
