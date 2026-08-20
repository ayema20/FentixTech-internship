function SearchBar({ city, setCity, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;