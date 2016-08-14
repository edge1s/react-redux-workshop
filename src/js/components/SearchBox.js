import React, {PropTypes} from 'react';

const SearchBox = props => {
  return(
    <div className="search-box">
      <form className="search-box__form" onSubmit={props.submitHandler}>
        <input />
        <input type="submit" value="search"/>
      </form>
    </div>
  )
};

SearchBox.propTypes = {
  submitHandler: PropTypes.func
};

export default SearchBox;
