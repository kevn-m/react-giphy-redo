import React from "react"

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.search(event.target.value)
  }

  return (
    <input
      onChange={handleChange}
      type="text"
      className="form-search form-control"
    />
  )
}

export default SearchBar
