import 'bootstrap/dist/css/bootstrap.min.css';
import s from './pageVideo.module.css'
import v from '../../../assets/video/v.mp4'
import { Col, Container, Row } from 'react-bootstrap';

function PageVideo() {
  return (
    <Container fluid className={s.wrapper}>
      <Row >
        <Col md={8}>
          <main className={s.videoContent}>
            <div >
              <video className={s.video} src={v} preload="metadata" controls></video>
              <h2 className={s.title} title="Ищем 'мертвый' JS и CSS на сайте. Изучаем coverage">Ищем "мертвый" JS и CSS на сайте. Изучаем coverage</h2>
              <p className={s.description} title="Изучаем JavaScript и CSS - c помощью инструментов веб разработчика браузера CHROME и консоли coverage ищем код не используемый на сайте. Разбираем код по используемым и не используемым функциям.">
                Изучаем JavaScript и CSS - c помощью инструментов<br /> веб разработчика браузера CHROME и консоли coverage ищем код не используемый на сайте. Разбираем код по используемым и не используемым функциям.
              </p>
            </div>
          </main>
        </Col>
        <Col>
          <aside>
            columns video
          </aside>
        </Col>
      </Row>
    </Container>

  );
}

export default PageVideo;
