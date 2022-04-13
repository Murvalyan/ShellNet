import 'bootstrap/dist/css/bootstrap.min.css';
import s from './pageVideo.module.css'
import v from '../../../assets/video/v.mp4'
import { Col, Container, Row } from 'react-bootstrap';
import Video from '../Video/Video';
function PageVideo() {
  const listVideo = [];

  for (let k = 0; k < 12; k++) {
    listVideo.push(<Video sm={12}/>)
  }
  return (

    <Container fluid className={s.wrapper}>
      <Row className={s.df}>
        <Col md={8}>
          <main className={s.videoContent}>
            <div >
              <video className={s.video} src={v} preload="metadata" controls></video>
              <h2 className={s.title} title="Ищем 'мертвый' JS и CSS на сайте. Изучаем coverage">Ищем "мертвый" JS и CSS на сайте. Изучаем coverage</h2>
              <p className={s.description} title="Изучаем JavaScript и CSS - c помощью инструментов веб разработчика браузера CHROME и консоли coverage ищем код не используемый на сайте. Разбираем код по используемым и не используемым функциям.">
                Изучаем JavaScript и CSS - c помощью инструментов<br /> веб разработчика браузера CHROME и консоли coverage ищем код не используемый на сайте. Разбираем код по используемым и не используемым функциям.
              </p>
            </div>
            <div className={s.comments}>
              <p>здесь будут комментарии</p>
            </div>
          </main>
        </Col>
        <Col md={4}>
          <Row>
            <aside className={s.aside}>
              {listVideo}
            </aside>
          </Row>
        </Col>
      </Row>
    </Container >

  );
}

export default PageVideo;
