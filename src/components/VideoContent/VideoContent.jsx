import { Container, Row } from 'react-bootstrap';
import Video from './Video/Video';
import s from './VideoContent.module.css';

const VideoContent = () => {
    return (
        <main className={s.main}>
            <Container fluid={'lg'}>
                <h1 className={s.title}>Все видео</h1>
                <Row>
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                </Row>
            </Container>
        </main>
    );
}

export default VideoContent;