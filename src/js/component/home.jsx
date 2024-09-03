import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx"

const Home = () => {
	return (
		// En  este componente utilice props para practicarlos
		<>
			<div className="container-fluid" style={{ "padding": + 0 }}>
				<Navbar
					icon="Start Bootstrap"
					home="Home"
					about="About"
					services="Services"
					contact="Contact"
				/>
			</div>
			<div className="container">
				<div className="row mt-5 mb-4">
					<Jumbotron  />
				</div>
				<div className="row">
					<div className="d-flex flex-column align-items-center flex-wrap flex-md-row justify-content-md-around mt-4 mb-4">
						<Cards
							img="https://www.hola.com/imagenes/viajes/20171128102570/seis-destino-austria-clave-invernal-navidad/0-511-634/innsbruck-navidad-invierno-t.jpg"
							cardTitle="Austria"
							cardText="
Austria, un país montañoso en Europa Central, destaca por sus Alpes, ciudades históricas como Viena y Salzburgo, y su rica cultura musical."
						/>
						<Cards
							img="https://www.noruegatours.com/wp-content/uploads/2021/12/noruega-en-febrero.png"
							cardTitle="Noruega"
							cardText="
Noruega, un país escandinavo de imponente belleza, se caracteriza por sus fiordos majestuosos y montañas escarpadas"
						/>
						<Cards
							img="https://media.ambito.com/p/7047783dd7487dee714720492ebaec12/adjuntos/239/imagenes/040/061/0040061572/italiajpg.jpg"
							cardTitle="italia"
							cardText="
Italia, la 'bota' del Mediterráneo, es un país europeo rebosante de historia, cultura y belleza natural. Desde las imponentes ruinas romanas y las obras maestras"
						/>
						<Cards
							img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/2d/19/44/mejor-uruguay.jpg?w=1200&h=-1&s=1"
							cardTitle="Montevideo"
							cardText="Montevideo, capital de Uruguay, se caracteriza por sus extensas playas sobre el Río de la Plata, su vibrante cultura y su arquitectura colonial."
						/>
					</div>
				</div>

			</div>

		<div className="bg-dark" style={{"height":"4em"}}>
			<Footer/>
		</div>
	


		</>
	)
};
export default Home;


