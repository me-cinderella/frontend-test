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
        this.dateFormatter = this.dateFormatter.bind(this);
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

    dateFormatter = (givendate) => {
      let date = new Date(givendate);

      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      if(month < 10)
        return `${day}-0${month}-${year}`;

      return `${day}-${month}-${year}`;

    }

    render () {
        return (
            <Container>
              <Row>
                <Col md={8} className="content">
                  {this.state.items &&
                    this.state.items.map((item) => {
                      return (
                        <div className="mb-5 bottom-border">
                          <p>Personaje: {item.name}</p>
                          <p>Descripcion: {item.description || 'sin descripcion disponible'}</p>
                          <img className="thumbnail" src={item.thumbnail['path']+'.'+item.thumbnail['extension']} />
                          <p>Modificado: {this.dateFormatter(item.modified)}</p>
                        </div>
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