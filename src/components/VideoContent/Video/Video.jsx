import s from './Video.module.css';
import LogoUser from '../../../assets/img/icon/webdev.jpg';
import { Col } from 'react-bootstrap';

const Video = () => {
    return (
        <Col sm={6} md={4} lg={3}>
            <div className={s.wrapperVideo}>
                <video src="video/video1.mp4" className={s.video} preload="metadata" controls></video>
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