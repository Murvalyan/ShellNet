import { Col, Container, Row } from 'react-bootstrap';
import s from './Footer.module.css';
import Logo from '../Header/TopHeader/Logo/Logo';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container >
                <Row className={s.wrapper} >

                    <Col sm={12} md={2}>
                        <Logo />
                    </Col>
                    <Col sm={12} md={10}>
                        <p className={s.copy}> Copyright © Murvalyan (ShellNet) 2021  Все права защищены</p>
                    </Col>
                </Row>

            </Container>
        </footer >
    );
}

export default Footer;