import AboutUmra from './components/about-umra/AboutUmra.jsx';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Price from './components/price/Price.jsx';
import VideoUmra from './components/video-umra/VideoUmra.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutUmra />
      <VideoUmra/>
      <Price />
    </>
  );
};

export default App;
