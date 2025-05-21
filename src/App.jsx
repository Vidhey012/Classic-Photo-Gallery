
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import ImageModal from './components/ImageModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    document.title = "Classic Photo Gallery";
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="min-vh-100 d-flex flex-column"
        style={{
          backgroundImage: "",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#fff',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ zIndex: 0 }}
        />
        <div className="container position-relative py-5" style={{ zIndex: 1 }}>
          <h1 className="headingFont text-center mb-3 display-4">
            Classic Photo Gallery
          </h1>
          <br/>
          <br/>
          <SearchBar />
          <br/>
          <ImageGrid />
          <ImageModal />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
