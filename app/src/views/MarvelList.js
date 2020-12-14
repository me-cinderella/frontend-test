import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class MarvelList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            offset: 0
        };

        this.infiniteScroll = this.infiniteScroll.bind(this);
        this.marvelFetch = this.marvelFetch.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.infiniteScroll);
      this.marvelFetch(this.state.offset);
    }

    infiniteScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        let newOffset = parseInt(this.state.offset + 20);
        this.marvelFetch(newOffset);
      }
    }

    marvelFetch = (offset) => {
      fetch('http://gateway.marvel.com/v1/public/characters?offset='+offset+'&ts=1&apikey=8595500b6e59404c0b25954eb157ef6f&hash=f2b0537ee38e7a3b299724dd4f94e670', { 
        headers: { 
            'Content-Type': 'application/json' 
        }
      })
      .then(res => res.json())
      .then(
        (response) => {
            this.setState({
              isLoaded: true,
              items: [...this.state.items,...response.data.results],
              offset: offset
            });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    render () {
        return (
            <Container>
              <Row>
                <Col md={8} className="content">
                  {this.state.items &&
                    this.state.items.map((item) => {
                      return (
                        <p>
                          Personaje: {item.name}
                          <br />
                          Descripcion: {item.description || 'sin descripcion disponible'}
                          </p>
                      )
                    })
                  }
                </Col>
              </Row>
            </Container>
        )
    }
}

export default MarvelList;