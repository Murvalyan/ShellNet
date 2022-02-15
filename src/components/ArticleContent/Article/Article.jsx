import { Col, Container, Row } from 'react-bootstrap';
import s from './Article.module.css';
import photo from '../../../assets/img/article/js.jpeg';

const Article = () => {
    return (
                <Col sm={12} xl={6} className={s.wrapper}>
                    <Row>
                        <Col xs={12} sm={6} className={s.wrapperImg}>
                            <img src={photo} alt="" />
                        </Col>
                        <Col xs={12} sm={6}>
                            <h2 className={s.title}>Post 1 Headline</h2>
                            <p className={s.descripton}>Sample small text. Lorem ipsum dolor sit amet.</p>
                            <span className={s.date}>Thu Jun 25 2020</span>
                            <a href="#" className={s.readMore}>Читать</a>
                        </Col>
                    </Row>
                </Col>
    );
}

export default Article;