import app from "./config"

export const getAllMovies = async () => {
  try {
    const { data } = await app.get("movie", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return data
  } catch (error) {
    console.log(error)  
  }
}

export const addFavoriteMovie = async (id) => {
  try {
    const { data } = await app.put(`movie/add/${id}`,{}, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return data
  } catch (error) {
    console.log(error);  
  }
}