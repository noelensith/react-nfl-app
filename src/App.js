import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './components/Home';
import Teams from './components/Teams';
import Standings from './components/Stadium'
import Contact from './components/Contact';

function App() {
  const [teams, setTeams] = useState([])
  //const [players, setPlayers] = useState([]) 
  //const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    function fetchTeams() {
      const options = {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      };
      
      fetch('http://localhost:3000/NFL', options)
        .then(response => response.json())
        .then(response => {
          setTeams(response)
        })
        .catch(err => console.error(err));
    }
    
    fetchTeams();

  }, [])
  

  console.log('teams', teams)

  return (
    <>
      <Router>
      <NavBar/>
        <Container>
        <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route path='/teams' element={<Teams teams={teams} />} />
            <Route path='/standings' element={<Standings teams={teams} />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Container>       
      </Router>
    </>
  )
}
export default App;
