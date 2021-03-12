
import './App.css';
import View from './components/views'
import Navbar from './components/navbar'

import React, {Component} from 'react';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './App.css';

import {Provider} from "react-redux"
import {store} from "./redux_folder/store"


  class App extends Component  {
	
	render() {
		return (
			<MDBContainer>
				<div className = "container">
					<Provider store = {store}>
						< Navbar />
						<br></br>
						<MDBRow>
							<MDBCol md="6">
								<View />
							</MDBCol>
						</MDBRow>
					</Provider >
				</div>
			</MDBContainer>
		);
	}
}

export default App;
