import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Liked from './pages/Liked';
import Header from './components/Header';

const App = () => {
  return (
   <>
        <Header  />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
      </>
  );
};

export default App;
