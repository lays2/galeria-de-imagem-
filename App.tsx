
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';
import Footer from './components/Footer';
import { PHOTO_DATA } from './constants';

const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredPhotos = useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) return PHOTO_DATA;
    
    return PHOTO_DATA.filter(photo => 
      photo.title.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto pb-10">
        <SearchBar query={query} setQuery={setQuery} />
        
        <section className="animate-in fade-in duration-700">
          <PhotoGrid photos={filteredPhotos} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
