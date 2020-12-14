import React from 'react';
import { values, json } from 'statics/initial-json.js';
import { Row, Col, Container } from 'react-bootstrap';


class Ejercicio2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newJson: {}
        }

        this.jsonTransform = this.jsonTransform.bind(this);
    }

    componentDidMount() {
        if (values && json.data)
            this.jsonTransform();
    }

    jsonTransform () {
        let newJson = {...json.data};

        for (var keyName in newJson) {
            let key = newJson[keyName].over_carrier_service_id;
            let keyValue = [values[key].carrier, values[key].service];
            newJson[keyName].over_carrier_service_id = keyValue;

            key = newJson[keyName].under_carrier_service_id;
            keyValue = [values[key].carrier, values[key].service];
            newJson[keyName].under_carrier_service_id = keyValue;
        }

        this.setState({ newJson });
    }

    render() {
        return(
            <Container>
                <h1>Ejercicio 2</h1>
                <Row>
                    {values && json.data &&
                    <Col lg={5} className="content mb-5">
                        <h3>Data original:</h3>
                        <p>Values:</p>
                        <ul>
                        {Object.keys(values).map((keyName, i) => {
                            return (
                            <li key={i}>
                                <p>{keyName}: </p>
                                <p>carrier: {values[keyName].carrier}</p>
                                <p>service: {values[keyName].service}</p>
                            </li>
                            )
                        })}
                        </ul>
                        <p>Json:</p>
                        <ul>
                        {Object.keys(json.data).map((keyName, i) => {
                            return (
                            <li key={i}>
                                <p>{keyName}: </p>
                                <p>carrier: {json.data[keyName].over_carrier_service_id}</p>
                                <p>service: {json.data[keyName].under_carrier_service_id}</p>
                            </li>
                            )
                        })}
                        </ul>
                    </Col>
                    }
                    <Col lg={5} lg={{ offset: 2 }} className="content mb-5">
                    <h3>Data transformada:</h3>
                    <ul>
                        {Object.keys(this.state.newJson).map((keyName, i) => {
                            return (
                            <li key={i}>
                                <p>{keyName}: </p>
                                <p>over_carrier_service_id: </p>
                                <p className="ml-5 mr-1">carrier: {this.state.newJson[keyName].over_carrier_service_id[0]}</p>
                                <p className="ml-5 mr-1">service: {this.state.newJson[keyName].over_carrier_service_id[1]}</p>
                                <p>under_carrier_service_id: </p>
                                <p className="ml-5 mr-1">carrier: {this.state.newJson[keyName].under_carrier_service_id[0]}</p>
                                <p className="ml-5 mr-1">service: {this.state.newJson[keyName].under_carrier_service_id[1]}</p>
                            </li>
                            )
                        })}
                    </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Ejercicio2;