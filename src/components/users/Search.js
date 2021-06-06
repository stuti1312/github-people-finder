import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, showUsers, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users by name"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showUsers && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          CLEAR
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showUsers: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
