import s from './Header.module.css';
import { Container, Row } from 'react-bootstrap';
import TopHeader from './TopHeader/TopHeader';
import NavHeader from './NavHeader/NavHeader';


const Header = (props) => {
  return (
    <header className={s.header}>
      <Container fluid>
        <Row>
          <TopHeader />
        </Row>
        <Row>
          <NavHeader text={props.text} />
        </Row>
      </Container>
    </header>
  );
}

export default Header;