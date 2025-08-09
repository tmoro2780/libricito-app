import React from 'react';
import {Navegador1} from '../../components/Navbar1.jsx'; 
import {Footer} from '../../components/Footer.jsx';
import libroimg from '../../public-img/Libros/German_Garmendia.jpg';
import { Col, Row } from 'react-bootstrap';
export const Libro = () => {
  return (
    <>
        <Navegador1 />
        <main className="container py-5">
            <Col md={12}>
                <Row>
                    <Col md={6}>
                        <Row>
                        <div >
                            <img src="{libroimg}" alt="" className='h-100 w-100 ' />
                            <div>
                                {/* Crear un componente para que se cree cada imagen que el vendedor quiera agregar del Libro*/}
                            </div>
                        </div>
                        </Row>
                    </Col>
                    <Col md={6}>
                    <Row>
                        <h1>Nombre Libro</h1>
                        <h2>Descripcion</h2>
                        <p>#ChupaElPerro es el primer libro del popular creador de contenido Germán Garmendia, conocido por su estilo auténtico, humor directo y cercanía con millones de seguidores en todo el mundo. En este libro, Germán comparte anécdotas personales, reflexiones y consejos prácticos sobre la vida, la amistad, el amor propio y cómo enfrentar momentos difíciles con una sonrisa.

                        Con un lenguaje claro y entretenido, Germán conecta con lectores jóvenes y adultos, ofreciendo una lectura amena, motivadora y cargada de humor. Es una guía para sobrevivir a los dramas cotidianos sin perder el buen ánimo, perfecta para fans del autor y para quienes buscan una lectura ligera pero significativa.</p>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-around gap-2'>
                            <div>
                                <h2>Autor</h2>
                                <p>Germán Garmendia</p>
                            </div>
                            <div>
                                <h2>Genero</h2>
                                <p>Biografia</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around gap-2'>
                            <div>
                            <h2>Precio</h2>
                            <p>$45.000</p>
                            </div>
                            
                            <div>
                            <h2>Stock</h2>
                            <div className='d-flex justify-content-around gap-2'>
                                <p>10</p>
                                <p>Unidades</p>
                            </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center gap-3'>
                            {/* Agregar el Link al boton de consultar para que lo lleve al apartdado de Consulta con el formulario */}
                            <button className='btn btn-primary'>Consultar Vendedor</button>
                            <button className='btn btn-primary'>Agregar a favoritos</button>
                        </div>
                        </Row>
                    </Col>
                </Row>
                <Row>
                            {/* Crear un componente para que se muestre como una mini card de cada libro */}
                </Row>
            </Col>

        </main>
        <Footer />
    </>
  );
};