import { Column, Columns, Title, Section } from 'devfractal-ui-core'
import React from 'react'

export interface Movie {
  readonly Poster: string
  readonly Title: string
  readonly Year: number
}

export interface MovieProps {
  readonly movie: Movie
}

export const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Column size="one-third">
      <Title size="4">{movie.Title}</Title>
      <img src={movie.Poster} />
      <Title size="5">{movie.Year}</Title>
    </Column>
  )
}

export interface MovieListProps {
  movieList: ReadonlyArray<Movie>
}

export const MovieList: React.FC<MovieListProps> = ({ movieList }) => {
  return (
    <Section>
      <Columns multiline>
        {movieList.map(movie => (
          <Movie key={movie.Title} movie={movie} />
        ))}
      </Columns>
    </Section>
  )
}
