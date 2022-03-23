import s from './Registr.module.css';
import { Link } from 'react-router-dom';
const Registr = () => {
    return (

        <div className={s.wrapper}>
            <Link to="/forms" className={s.reg}>Вход/Регистрация</Link>
        </div>
    );
}

export default Registr;