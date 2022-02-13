import s from './Header.module.css';
import { Container, Row } from 'react-bootstrap';
import TopHeader from './TopHeader/TopHeader';
import NavHeader from './NavHeader/NavHeader';


const Header = () => {
  return (
    <header className={s.header}>
      <Container fluid>
        <Row>
          <TopHeader />
        </Row>
        <Row>
          <NavHeader />
        </Row>
      </Container>
    </header>
  );
}

export default Header;