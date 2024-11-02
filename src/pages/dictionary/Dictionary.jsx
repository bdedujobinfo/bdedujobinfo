/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "./Search";
import { DictionaryDetails } from "./DictionaryDetails";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { DataLoading } from "../../components/shared/DataLoading";

export const Dictionary = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    axios.get("/public/data/english-dictionary-data.json").then((response) => {
      setWords(response.data);
      setLoading(false);
      setFilterSearch(response.data);
    });
  }, []);

  const searchHandler = (e) => {
    const searchTerm = e?.target?.value;
    setSearch(searchTerm);

    const filteredWords = words.filter(
      (word) =>
        word?.name?.toLowerCase().includes(searchTerm?.toLowerCase().trim()) ||
        word?.meaning
          ?.toLowerCase()
          .includes(searchTerm?.toLowerCase()?.trim()) ||
        word?.synonyms
          ?.toLowerCase()
          .includes(searchTerm?.toLowerCase().trim()) ||
        word?.antonyms
          ?.toLowerCase()
          .includes(searchTerm?.toLowerCase()?.trim())
    );
    setFilterSearch(filteredWords);
  };

  return (
    <div className="mt-5 px-5 py-2 mx-auto">
      <div className="pt-16">
        <Search search={search} searchHandler={searchHandler} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {loading ? (
          <DataLoading />
        ) : filterSearch.length > 0 ? (
          filterSearch.map((word) => (
            <DictionaryDetails key={word.id} word={word} />
          ))
        ) : (
          <ErrorMessage />
        )}
      </div>
    </div>
  );
};
