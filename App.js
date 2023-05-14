import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const axios = require('axios');

// const options = {
//   method: 'POST',
//   url: 'https://travlinq-service.p.rapidapi.com/api/v1/flight/fare-rule-search',
//   headers: {
//     'content-type': 'application/json',
//     conversationId: '<REQUIRED>',
//     sessionId: '<REQUIRED>',
//     'X-API-KEY': '<REQUIRED>',
//     'X-RapidAPI-Key': 'e64d69536amsh333f6f1a33d00f9p1d0645jsn6541df4db506',
//     'X-RapidAPI-Host': 'travlinq-service.p.rapidapi.com'
//   },
//   data: {
//     offerId: '',
//     fareBasis: [],
//     additionalProperties: []
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


function App() {
  return (
   <>
   <Navbar />
    <Home />
   <Main />
   <Footer /> 
   </>
  );
}

export default App;
