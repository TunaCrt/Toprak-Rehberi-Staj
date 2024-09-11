import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductsDetail from './pages/ProductsDetail';
import TerrainDetail from './pages/Terrain/TerrainDetail';
import PlantedCrop from './pages/PlantedCrop/PlantedCrop';
import EditTerrain from './pages/Terrain/EditTerrain';
import TerrainAdd from './pages/Terrain/TerrainAdd';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Terrain from './pages/Terrain/Terrain';
import PlantedCropAdd from './pages/PlantedCrop/PlantedCropAdd';
import Sowing from './pages/Sowing/Sowing';
import PrivateRoute from './component/PrivateRoute'; // PrivateRoute bileşenini import edin

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<SignUp />} />
      <Route path='/Signin' element={<SignIn />} />
      <Route path='/home' element={<PrivateRoute element={Home} />} />
      <Route path='/products' element={<PrivateRoute element={Products} />} />
      <Route path='/Terrains' element={<PrivateRoute element={Terrain} />} />
      <Route path='/productsDetail/:id' element={<PrivateRoute element={ProductsDetail} />} />
      <Route path='/terrainDetail/:id' element={<PrivateRoute element={TerrainDetail} />} />
      <Route path='/PlantedCrop/:id' element={<PrivateRoute element={PlantedCrop} />} />
      <Route path='/editTerrain/:id' element={<PrivateRoute element={EditTerrain} />} />
      <Route path='/terrainAdd' element={<PrivateRoute element={TerrainAdd} />} />
      <Route path='/plantedCropAdd/:id' element={<PrivateRoute element={PlantedCropAdd} />} />
      <Route path='/sowing/:id' element={<PrivateRoute element={Sowing} />} />
    </Routes>
  );
}

export default App;
