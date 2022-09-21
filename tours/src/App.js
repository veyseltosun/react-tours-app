import React, { useState, useEffect } from 'react'
import axios from "axios";
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const[tours, setTours] = useState([]);

 function removeTour  (id)  {
    const newTours = tours.filter((tour) =>tour.id !== id)
    setTours(newTours)
  }
  
  function getData() {
  axios.get(url)
  .then(response => setTours( response.data))
  .catch(error => console.log({error}))
  setLoading(false)
}




  useEffect (( )=>{
     getData()
  },[])


  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(tours.length === 0){
    return(
      <main>
         <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={getData}>refresh</button>

         </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
