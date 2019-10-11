import React from 'react'
import { Movie, MovieList } from './Movie'
import { SearchMovie } from './Search'

export const MovieApp = () => {
  const [movies, setMovies] = React.useState<readonly Movie[]>([])

  const handleSearch = (searchValue: string) => {
    fetch(`https://www.omdbapi.com/?s==${searchValue}&apikey=4a3b711b`)
      .then(res => res.json())
      .then(data => data.Search)
      .then(setMovies)
      .catch(err => console.log(err.message))
  }

  return (
    <>
      <SearchMovie
        onSubmit={(values, actions) => {
          handleSearch(values.search)
          actions.setSubmitting(false)
        }}
      />
      <MovieList movieList={movies} />
    </>
  )
}
