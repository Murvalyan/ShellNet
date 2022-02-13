import s from './Logo.module.css';
import LogoImg from '../../../../assets/img/icon/logo.png';

const Logo = () => {
    return (
        <div className={s.logo}>
            <img src={LogoImg} alt="ShellNet" />
        </div>
    );
}

export default Logo;