import React from 'react';
import { useImageStore } from '../store/useImageStore';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SearchBar() {
  const query = useImageStore((state) => state.query);
  const setQuery = useImageStore((state) => state.setQuery);

  return (
    <form
      className="d-flex justify-content-center mb-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="input-group w-75">
        <span 
        className="input-group-text bg-white border-0"
        style={{
            borderRadius: '50px',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            backgroundColor: 'rgba(255,255,255,0.9)',
          }}>
          🔍
        </span>
        <input
          type="search"
          placeholder="Type something magical – e.g., sunset, forest, space"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control form-control-lg border-0 shadow-sm"
          style={{
            borderRadius: '50px',
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
            backgroundColor: 'rgba(255,255,255,0.9)',
          }}
        />
      </div>
    </form>
  );
}
