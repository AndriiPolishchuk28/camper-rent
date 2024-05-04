import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Favorites from './pages/Favorites/Favorites';
import SharedLayout from './components/SharedLayout/SharedLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favourites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes>
  );
};
export default App;
