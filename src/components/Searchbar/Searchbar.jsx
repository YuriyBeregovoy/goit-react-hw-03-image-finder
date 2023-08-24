import { ButtonForm, InputStyle, SearchButtonLabel, SearchContainer, SearchForm } from "./Searchbar.styled"

export const Searchbar = ({onSubmit}) => {
  return (<SearchContainer>
    <SearchForm onSubmit={onSubmit}>
          <InputStyle type="text" name="query" placeholder="Search images..."/>
          <ButtonForm type="submit"><SearchButtonLabel htmlFor=""></SearchButtonLabel></ButtonForm>
        </SearchForm>
       </SearchContainer>
)

}