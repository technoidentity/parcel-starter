import { FormikActions } from 'formik'
import React from 'react'
import { Simple } from 'technoidentity-devfractal'

// interface SearchFormProps {
//   onSearch(value: string): void
// }

// export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
//   const [search, setSearch] = React.useState('')
//   const handleChange = (evt: any) => {
//     setSearch(evt.target.value)
//   }
//   const handleSubmit = (e: any) => {
//     e.preventDefault()
//     onSearch(search)
//     setSearch('')
//   }

//   return (
//     <form>
//       <input type="text" name="search" value={search} onChange={handleChange} />
//       <input type="submit" onClick={handleSubmit} value="Search" />
//     </form>
//   )
// }

interface SearchMovieProps {
  onSubmit(
    value: { search: string },
    actions: FormikActions<typeof value>,
  ): void
}

export const SearchMovie: React.FC<SearchMovieProps> = ({ onSubmit }) => (
  <Simple.Form initialValues={{ search: '' }} onSubmit={onSubmit}>
    <Simple.Text name="search" />
    <Simple.FormButtons />
  </Simple.Form>
)
