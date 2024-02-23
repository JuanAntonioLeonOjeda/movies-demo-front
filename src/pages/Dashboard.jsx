import { useEffect, useState } from "react"

import MovieCard from "../components/MovieCard/MovieCard"

import {getOwnProfile} from '../services/userService'

function Dashboard() {
  const [user, setUser] = useState()

  useEffect(()=> {
    const getProfile = async () => {
      const {result} = await getOwnProfile()
      console.log(result)
      setUser(result)
    }
    getProfile()
  }, [])

  const displayFavoriteMovies = () => {
    return user.movies.map((movie, index) => {
      return (
        <MovieCard key={index} info={movie} favorite={true} />
      )
    })
  }

  return (
    <>
      {
        !user ? 
        <h1>
          Cargando...
        </h1> :
        <>
          <h1>
            Welcome, { user.name }!
          </h1>
          <div>
            <h1>
              My Favorite Movies
            </h1>
            { displayFavoriteMovies() }
          </div>
        </>
      }
    </>
  )
}

export default Dashboard