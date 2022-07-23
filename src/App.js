import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Counter from './components/contador'
import './styles.css';
import {FormattedMessage } from 'react-intl';

const App = () => {
	return (
		<div>
			<Header />

			<div className="main">
				<h1 className="titulo">
					<FormattedMessage 
						id="app.welcome"
						defaultMessage="Jessica Guadalupe "
						values={
							{
								name: 'Jessica Guerrero'
							}
						}
					/>
				</h1>
				<p className="subtitulo">
					<FormattedMessage  
						id="app.welcomee"
						defaultMessage="Mi nombre es Jessica Guerrero,
						me gusta mucho salir a patinar, y ver series.
						Cuando termine la carrera quisiera ser maestra de Escuela"
						values={
							{
								name: 'Informacion'
							}
						}
					/>
				</p>
				
				<Grid />
				<React.StrictMode>
					<Counter / >
				</React.StrictMode>
			</div>
		</div>
	);
}
 
export default App;