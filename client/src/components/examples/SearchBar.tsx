import SearchBar from "../SearchBar";

export default function SearchBarExample() {
  return (
    <div className="p-8 max-w-4xl">
      <SearchBar
        onSearch={(query, capacity, location) =>
          console.log("Search:", { query, capacity, location })
        }
        onFilterClick={() => console.log("Filters clicked")}
      />
    </div>
  );
}
