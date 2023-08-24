import { SearchContainer, SearchForm } from "./Searchbar.styled"

export const Searchbar = ({onSubmit}) => {
  return (<SearchContainer>
    <SearchForm onSubmit={onSubmit}>
          <input type="text" name="query" />
          <button type="submit">Submit</button>
        </SearchForm>
       </SearchContainer>
)

}