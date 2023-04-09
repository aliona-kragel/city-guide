import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import MainLayout from 'layouts/MainLayout';
import Places from 'pages/Places';
import Map from 'pages/Map';
import PlaceDetails from 'pages/PlaceDetails';
import Start from 'pages/StartPage';

export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<MainLayout />}>
      <Route path='map' element={<Map />} />
      <Route path="places" element={<Places />} />
      <Route path="/places/:osm_id" element={<PlaceDetails />} />
    </Route >
    <Route path='/start' element={<Start />} />
  </>
))