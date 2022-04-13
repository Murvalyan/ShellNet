import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '../../assets/img/profile/backgroundProfile.jpg'
import { asyncLogout, requestUsers } from '../../store';
import s from './ProfileUser.module.css'

const ProfileUser = () => {
    const user = useSelector(state => state.user);
    const users = useSelector(state => state.users);
    const dispatch = new useDispatch();
    const videos = [];
    return (
        <Container fluid className={s.wrapper}>
            <div className={s.wrapperHeaderImg}>
                <img src={defaultImg} alt="Шапка профиля" className={s.headerImg} />
            </div>
            <h1>Пользователь: {user.email}</h1>

            <div className={s.myVideo}>
                <h2>Мои видео:</h2>
                <div className={s.colection}>
                    {
                        videos.length < 1 ? <h2 style={{textAlign: 'center', paddingTop: 150}}>Видео нету</h2>
                        : 'Видео есть'
                    }
                </div>
            </div>

            <div>
                <div style={{display: 'flex'}}>
                    <h2 style={{marginRight: 50}}>Получить список всех пользователей:</h2>
                <button onClick={() => dispatch(requestUsers())} type="submit">Получить список пользователей</button>
                </div>
                <div className={s.colection}>
                    {
                        users.length < 1 ? <h2 style={{textAlign: 'center'}}>Пользователи не найдены</h2>
                        :
                        <div><h2>Список:</h2>
                            <div>{users.map(user => <h3>{user.email}</h3>)}</div>
                        </div>
                    }
                    
                </div>
                
            </div>
            <button onClick={()=> dispatch(asyncLogout())} type="submit">Выйти с учетной записи</button>
        </Container>

    );
}

export default ProfileUser;