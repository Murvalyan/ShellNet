import s from './Video.module.css';
import LogoUser from '../../../assets/img/icon/webdev.jpg';
import { Col } from 'react-bootstrap';
import v from '../../../assets/video/v.mp4'
import { Link } from 'react-router-dom';
const Video = (props) => {
   const id = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
    return (
        <Col sm={props.sm} md={props.md} lg={props.lg}>
            <div className={s.wrapperVideo}>
                <Link to={`/videoPage/${id}`}>
                    <video src={v} className={s.video}></video>
                </Link>
                <div className={s.wrapper}>
                    <Col xs={3}>
                        <div>
                            <img src={LogoUser} alt="User" className={s.img} />
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div>
                            <h2 className={s.title} title="Ищем 'мертвый' JS и CSS на сайте. Изучаем coverage">Ищем "мертвый" JS и CSS на сайте.<br /> Изучаем coverage</h2>
                            <p className={s.description} title="Изучаем JavaScript и CSS - c помощью инструментов веб разработчика браузера CHROME и консоли coverage ищем код не используемый на сайте. Разбираем код по используемым и не используемым функциям.">
                                Изучаем JavaScript и CSS - c помощью инструментов<br /> веб разработчика браузера CHROME и консоли coverage ищем код не используемый на сайте. Разбираем код по используемым и не используемым функциям.
                            </p>
                        </div>
                    </Col>
                </div>
            </div>
        </Col>
    );
}

export default Video;