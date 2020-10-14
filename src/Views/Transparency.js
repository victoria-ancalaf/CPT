import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import TransparenciaHeader from '../Components/Transparencia/TransparenciaHeader';
import { FullPage, Slide } from 'react-full-page';
import Graficos from '../Components/Transparencia/Graficos';
import Footer from '../Components/Footer/Footer';
import Beneficiarios from '../Components/Transparencia/Beneficiarios';
import Impacto from '../Components/Transparencia/Impacto';

const Transparency = () => {
	return (
		<div>
			<FullPage>
				<Navbar />
				<Slide>
					<TransparenciaHeader />
				</Slide>
				<Slide>
					<Beneficiarios />
				</Slide>
				<Slide>
					<Impacto />
				</Slide>

				<Slide>
					<Graficos />
				</Slide>

				<Slide>
					<Footer />
				</Slide>
			</FullPage>
		</div>
	);
};

export default Transparency;
