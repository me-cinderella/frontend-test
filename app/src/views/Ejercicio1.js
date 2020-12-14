import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

class Ejercicio1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inicioRango: 1,
            terminoRango: 10,
            numerosPrimos: [],
            resultMessage: ""
        }
        this.calcularPrimos = this.calcularPrimos.bind(this);
        this.esPrimo = this.esPrimo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {    
        console.log(e);
        this.setState({[e.target.id]: e.target.value});  
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.inicioRango <= 0) {
            this.setState({ numerosPrimos: [], resultMessage: "EL NUMERO DEBE SER MAYOR A 0" })
        } else {
            this.calcularPrimos();
        }
    }

    calcularPrimos = () => {
        var j = this.state.inicioRango;
        var c = this.state.terminoRango;
        var numerosPrimos = [];
        
        for (j; j <= c; j++) {
        
          if (this.esPrimo(j)) {
            numerosPrimos.push(j);
          }
          
        }
        
        this.setState({ 
            numerosPrimos: numerosPrimos, 
            resultMessage: "Los numeros primos dentro del rango son"
        })
    }

    esPrimo = (numero) => {
        
        for (var i = 2; i < numero; i++) {
      
          if (numero % i === 0) {
            return false;
          }
      
        }

        return numero != 1;
      }

    render() {
        return(
            <Col md={8} className="content">
                <h1>Ejercicio 1</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="inicioRango" onChange={this.handleChange}>
                        <Form.Label>Inicio del rango numerico: </Form.Label>
                        <Form.Control type="text" value={this.state.inicioRango} />
                    </Form.Group>
                    <Form.Group controlId="terminoRango" onChange={this.handleChange}>
                        <Form.Label>Fin del rango numerico: </Form.Label>
                        <Form.Control type="text" value={this.state.terminoRango} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Obtener numeros primos
                    </Button>
                </Form>
                <div>
                    <p>{this.state.resultMessage}</p>
                    {this.state.numerosPrimos &&
                        this.state.numerosPrimos.map( (numero) => <p>{numero}</p>)
                    }
                </div>
                
            </Col>
        )
    }
}

export default Ejercicio1;