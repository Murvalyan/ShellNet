import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import VideoContent from './components/VideoContent/VideoContent';
import Footer from './components/Footer/Footer';
import ArticleContent from './components/ArticleContent/ArticleContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import PageVideo from './components/VideoContent/pageVideo/pageVideo';
import Forms from './components/Header/TopHeader/Registr/Forms';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './store';
import ProfileUser from './components/ProfileUser/ProfileUser';

function App() {
  const dispatch = new useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) { 
      dispatch(checkAuth())
    }
  }, [])
  const isAuth = useSelector(state => state.isAuth)

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/video/*" index element={<VideoContent />} />
          <Route path="/videoPage/*" element={<PageVideo />} />
          {
            isAuth ? <Route path="/profileUser/*" element={<ProfileUser />} />
            : null
          }
          <Route path="*" element={<NotFound />} />
          <Route path="article/*" element={<ArticleContent />} />
          <Route path="forms/" element={<Forms />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
