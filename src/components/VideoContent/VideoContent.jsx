import { Container, Row } from 'react-bootstrap';
import Video from './Video/Video';
import s from './VideoContent.module.css';

const VideoContent = () => {

    const listVideo = [];

    for (let k = 0; k < 12; k++) {
        listVideo.push(<Video />)
    }


    return (
        <main className={s.main}>
            <Container fluid={'lg'}>
                <h1 className={s.title}>Все видео</h1>
                <Row>
                    {listVideo}
                </Row>
            </Container>
        </main>
    );
}

export default VideoContent;