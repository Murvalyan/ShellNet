import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLogin, asyncReg } from '../../../../store';
import s from './Forms.module.css'

const Forms = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = new useDispatch();
    const isAuth = useSelector(state => state.isAuth);
    const user = useSelector(state => state.user)
    // window.user = user
    // window.is = isAuth
    return (
        <div className={s.wrapper}>
            <Container>
                forms
                <h2>
                    {
                        isAuth ? `Пользователь авторизирован ${user.email}`
                            : `Пользователь не авторизирован`
                    }
                </h2>
                <input className={s.input} type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder='Email' />
                <input className={s.input} type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder='Password' />
                <button className={s.btn} onClick={() => dispatch(asyncLogin(email, password))} type="submit">Войти</button>
                <button className={s.btn} onClick={() => dispatch(asyncReg(email, password))} type="submit">Зарегистрироваться</button>
            </Container>
        </div>

    );
}

export default Forms;