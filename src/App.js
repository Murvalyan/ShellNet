import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import VideoContent from './components/VideoContent/VideoContent';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <VideoContent />
      <Footer />
    </div>
  );
}

export default App;
