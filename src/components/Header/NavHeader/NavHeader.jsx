import s from './NavHeader.module.css';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavHeader = (props) => {
    const [activeLink, setActiveLink] = useState(false)

    return (
        <nav className={s.nav}>
            <Col>
                <ul className={s.list}>
                    <Col sm={2}>
                        <li className={`${s.item} ${s.burger}`}>
                            <span className="nav__burger">;</span>
                        </li>
                    </Col>
                    <Col xs={10} sm={6}>
                        <li className={s.item}>
                            {
                                activeLink
                                    ?
                                    <NavLink onClick={() => setActiveLink(false)} to="/video">
                                        Обучающий материал в виде видео
                                    </NavLink>
                                    :
                                    <NavLink onClick={() => setActiveLink(true)} to="/article">
                                        Обучающий материал в виде статей
                                    </NavLink>
                            }
                        </li>
                    </Col>
                    <Col xs={12} sm={4}>
                        <li className={s.item}>
                            <a href="#" className="header__navLink nav__link">Обратная связь</a>
                        </li>
                    </Col>
                </ul>
            </Col >
        </nav >
    );
}

export default NavHeader;