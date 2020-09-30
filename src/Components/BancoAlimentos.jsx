import React, {useState} from 'react'
import iconOperaciones from '../img/iconOperaciones.png';
import { Figure, Spinner } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const BancoAlimentos = () => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <div>

                <div className="container px-lg-5  pt-5 mt-5 pb-5 mb-5">
                    <h1>Nuestro <strong>Modelo de Operaciones</strong></h1>
                    <div className="row mx-lg-n5">
                        <div className="col-12 col-md-2 py-3 px-lg-3 pt-5 mt-5 border bg-light align-self-center text-center">

                            <Spinner animation="grow" variant="secondary" />
                            <Figure>
                                <Figure.Image
                                    width={206}
                                    height={203}
                                    alt="iconOperaciones"
                                    src={iconOperaciones}
                                />
                            </Figure>
                            <h3><strong>Banco de Alimentos</strong></h3>
                            <p>Dona los alimentos que te sobren en casa.</p>
                            <br></br>
                            <Button onClick={() => setLgShow(true)}>Large modal</Button>

                        </div>


                    </div>
                </div>
            </div>


            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    )
}

export default BancoAlimentos