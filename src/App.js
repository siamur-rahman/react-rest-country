
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries() {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])

  return (
    <div>
      <h2>Travelling around the world!!</h2>
      <p>comments:{countries.length}   </p>
      {
        countries.map(country => <Country name={country.name} email={country.email}> </Country>)
      }
    </div>
  )
}

function Country(props) {
  // console.log(props.name);
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Email: {props.email}</h4>
    </div>
  )
}

export default App;
