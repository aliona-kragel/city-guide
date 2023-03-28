import PlaceDetails from 'pages/PlaceDetails';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import Cities from '../pages/Cities';
import Map from '../pages/Map';

export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<MainLayout />}>
      <Route path="map" element={<Map />} />
      <Route path="cities" element={<Cities />} />
      <Route path="/cities/:id" element={<PlaceDetails />} />
    </Route >
  </>
))