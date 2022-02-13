import s from './Search.module.css';
import { Col } from 'react-bootstrap';
import LogoSearch from '../../../../assets/img/icon/search.png';

const Search = () => {
    return (
        <form action="#" className={s.search}>
            <Col xs={10}>
                <input type="text" className={s.input} placeholder="Поиск" />
            </Col>
            <Col xs={2}>
                <button className={s.btn}>
                    <img src={LogoSearch} alt="Поиск" />
                </button>
            </Col>
        </form>
    );
}

export default Search;