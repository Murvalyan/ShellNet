import Registr from './Registr/Registr';
import Search from './Search/Search';
import UserLink from './UserLink/UserLink';
import Logo from './Logo/Logo';
import s from './TopHeader.module.css';
import { Col } from 'react-bootstrap';

const TopHeader = () => {
    return (
        <div className={s.topHeader}>
            <Col xs={12} sm={3}>
                <Logo />
            </Col>
            <Col xs={12} sm={5}>
                <Search />
            </Col>
            <Col xs={8} sm={2}>
                <Registr />
            </Col>
            <Col sx={4} sm={2}>
                <UserLink />
            </Col>
        </div>
    );
}

export default TopHeader;