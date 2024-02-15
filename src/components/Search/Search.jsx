import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarStyle,
} from './Search.styled';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmitSearchBar, value }) {
  return (
    <SearchbarStyle>
      <SearchForm onSubmit={onSubmitSearchBar}>
        <SearchFormButton>
          <span>Search</span>
        </SearchFormButton>

        <SearchFormInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          defaultValue={value}
        />
      </SearchForm>
    </SearchbarStyle>
  );
}

Searchbar.propTypes = {
  onSubmitSearchBar: PropTypes.func.isRequired,
};
