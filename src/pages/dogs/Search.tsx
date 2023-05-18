interface ISearchProps {
  query: string;
  handleSearch: (query: string) => void;
}
const Search: React.FC<ISearchProps> = ({
  query,
  handleSearch
}) =>
  <div className="w-screen mt-4">
    <input
      className="w-3/5 p-3 place mx-3 border-2 border-gray-300 bg-white h-10 rounded-lg
      text-sm focus:w-11/12 transition-all"
      type="text"
      value={query}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search dogs by breed..."
    />
  </div>;
export default Search;
