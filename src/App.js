import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import VideoContent from './components/VideoContent/VideoContent';
import Footer from './components/Footer/Footer';
import ArticleContent from './components/ArticleContent/ArticleContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<VideoContent />} />
          <Route path="/article/*" element={<ArticleContent />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
