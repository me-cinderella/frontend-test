import Header from 'components/Header.js';
import { MarvelList, Ejercicio1, Ejercicio2 } from './views';
import { Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="window">
        <Container>
          <Header />
          <Row>
              <Col className="col-12 pt-3">
                <Switch>
                  <Route path="/ejercicio-2">
                    <Ejercicio2 />
                  </Route>
                  <Route path="/ejercicio-1">
                    <Ejercicio1 />
                  </Route>
                  <Route path="/">
                    <MarvelList />
                  </Route>
                </Switch>
              </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
