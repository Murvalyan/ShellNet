import { Container, Row } from 'react-bootstrap';
import s from '../VideoContent/VideoContent.module.css';
import Article from './Article/Article';

const ArticleContent = () => {
    return (
        <main className={s.main}>
            <Container fluid={'lg'}>
                <h1 className={s.title}>Все статьи</h1>
                <Row>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </Row>
            </Container>
        </main>
    );
}

export default ArticleContent;