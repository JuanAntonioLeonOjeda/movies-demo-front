import { useEffect, useState } from "react"

import MovieCard from '../components/MovieCard/MovieCard'

import {getAllMovies} from '../services/moviesService'

function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const { result } = await getAllMovies()
      setMovies(result)
    }
    getMovies()
  }, [])

  const displayMovies = () => {
    return movies.map((movie, index) => {
      return (
        <MovieCard key={index} info={movie} />
      )
    })
  }
  return (
    <div style={{display: 'flex', alignItems: 'center', height: '80vh'}}>
      {
        displayMovies()
      }
    </div>
  )
}

export default Movies