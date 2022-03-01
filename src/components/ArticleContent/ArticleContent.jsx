import { Container, Row } from 'react-bootstrap';
import s from '../VideoContent/VideoContent.module.css';
import Article from './Article/Article';

const ArticleContent = () => {

    const listArticle = [];

    for (let k = 0; k < 12; k++) {
        listArticle.push(<Article />)
    }

    return (
        <main className={s.main}>
            <Container fluid={'lg'}>
                <h1 className={s.title}>Все статьи</h1>
                <Row>
                    {listArticle}
                </Row>
            </Container>
        </main>
    );
}

export default ArticleContent;