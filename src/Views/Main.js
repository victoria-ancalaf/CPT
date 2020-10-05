import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Carrusel from '../Components/Header/Carrusel';
import Operaciones from '../Components/ModeloOperaciones/Operaciones';
import Voluntariado from '../Components/Voluntariado/Voluntariado';
import Numbers from '../Components/Cifras/Numbers';
import Colaboradores from '../Components/Colaboradores/Colaboradores';
import Commitment from '../Components/SeguridadAlimentaria/Commitment';
import Fomentamos from '../Components/Fomentamos/Fomentamos';
import Video from '../Components/Video/Video'
import { FullPage, Slide } from 'react-full-page';

const Main = () => {
	return (
		<div>
			<FullPage>
				<Navbar />
				<Slide>
					<Carrusel />
				</Slide>
				<Slide>
					<Voluntariado />
				</Slide>
				<Slide>
					<Numbers />
				</Slide>
				<Slide>
					<Commitment />
				</Slide>
				<Slide>
					<Fomentamos />
				</Slide>
				<Slide>
					<Operaciones />
				</Slide>
				<Slide>
					<Colaboradores />
				</Slide>
				<Slide>
					<Video />
				</Slide>
				<Slide>
					<Footer />
				</Slide>
			</FullPage>
		</div>
	);
};

export default Main;
