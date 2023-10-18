import React from "react";
import "./SearchForm.css";
import { useForm } from "../../hooks/useForm";
export default function SearchForm({ onSearchNews }) {
  const { values, handleChange, setValues } = useForm({});
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onSearchNews(values);
  };
  return (
    <form className="searchform">
      <input
        className="searchbar__input"
        placeholder="Search something ..."
        value={values.search || ""}
        name="search"
        onChange={handleChange}
      />
      <button
        value="Search"
        name="search"
        title="Search"
        className="searchbar__button"
        type="submit"
        onSubmit={handleOnSubmit}
      >
        Search
      </button>
    </form>
  );
}
