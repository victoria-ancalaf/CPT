import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import TransparenciaHeader from '../Components/Transparencia/TransparenciaHeader'
import { FullPage, Slide } from 'react-full-page';
import Graficos from '../Components/Transparencia/Graficos'
import Footer from '../Components/Footer/Footer'

const Transparency = () => {
    return (
        <>
        <FullPage>
        <Navbar />
        <Slide>
            <TransparenciaHeader />
        </Slide>
        <Slide>
            <Graficos />
        </Slide>
        <Slide>
        <Footer />
        </Slide>
        </FullPage>
        </>
    )
}

export default Transparency
