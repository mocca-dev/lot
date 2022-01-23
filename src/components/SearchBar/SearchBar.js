import FieldText from '../FieldText/FieldText';
import IconBtn from '../IconBtn/IconBtn';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <FieldText placeholder={'ej.: Siempre Viva 123'} name="searchText" />
      <IconBtn />
    </div>
  );
};

export default SearchBar;
