import { React } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Langing/Landing';
import RestaurantHome from './Pages/RestaurantHome/RestaurantHome';
import HallHome from './Pages/HallHome/HallHome';
import HallAbout from './Pages/HallAbout/HallAbout';
import HallMenu from './Pages/HallMenu/HallMenu';
import Gameroom from './Pages/Gameroom/Gameroom';
import RestaurantGallery from './Pages/RestaurantGallery/RestaurantGallery';
import RestaurantMenuPage from './Pages/RestaurantMenuPage/RestaurantMenuPage';
import ScrollToTop from './ScrollToTop';
import AllHallsPage from './Pages/AllHallsPage/AllHallsPage';
import HallReservationPage from './Pages/HallReservationPage/HallReservationPage';
import HallGallery from './Pages/HallGallery/HallGallery';
import HallContact from './Pages/HallContact/HallContact';
import WinterAnimation from './Components/WinterAnimation/WinterAnimation';

function App() {

  // const currentDate = new Date()
  
  return (
    <ScrollToTop>
      {/* <SeasonalAnimation currentDate={currentDate} /> */}
      <WinterAnimation />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/restoran/početna' element={<RestaurantHome />} />
        <Route path='/restoran/o-nama' element={<HallAbout />} />
        <Route path='/restoran/igraonica' element={<Gameroom />} />
        <Route path='/restoran/jelovnik' element={<RestaurantMenuPage />} />
        <Route path='/restoran/galerija' element={<RestaurantGallery />} />
        <Route path='/početna' element={<HallHome />} />
        <Route path='/o-nama' element={<HallAbout />} />
        <Route path='/meni' element={<HallMenu />} />
        <Route path='/sale' element={<AllHallsPage />} />
        <Route path='/rezervacije' element={<HallReservationPage />} />
        <Route path='/galerija' element={<HallGallery />} />
        <Route path='/kontakt' element={<HallContact />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
