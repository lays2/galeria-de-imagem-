
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <div className="max-w-xl mx-auto mb-10 px-4">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar fotos pelo nome..."
          className="w-full pl-5 pr-14 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-700 bg-white shadow-sm group-hover:shadow-md text-lg"
        />
        <button 
          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200"
          aria-label="Pesquisar"
        >
          <Search size={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
