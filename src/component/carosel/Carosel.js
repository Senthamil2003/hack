import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import trig from "../../image/trig.jpg"
import phy from "../../image/phy.jpeg"
import gram from "../../image/gram.jpg"
import "../greet/greet.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Carosel extends Component {
  render() {
    return (
      <div>
                   <Carousel className='totcar'>
                        <Carousel.Item >
                            <img
                                className="d-block w-90"
                                src={trig}
                                alt="First slide"
                            />
                            <Carousel.Caption className='cap'>
                                <h3 className='th2'>Maths</h3>
                                <p className='tp2'>Mathematics is the science and study of quality, structure, space, and change.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-90"
                                src={phy}
                                alt="Second slide"
                            />
                            <Carousel.Caption className='cap'>
                                <h3 className='th2'>Physics</h3>
                                <p className='tp2'>Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-90"
                                src={gram}
                                alt="Third slide"
                            />
                            <Carousel.Caption className='cap'>
                                <h3 className='th2'>Grammer</h3>
                                <p className='tp2'>
                                grammar, rules of a language governing the sounds, words, sentences, and other elements, as well as their combination and interpretation. 
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
      </div>
    )
  }
}
