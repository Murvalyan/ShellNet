import { Container } from 'react-bootstrap';
import './Forms.css';

const Forms = () => {

    return (
        <Container style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
            <div className="form-structor">
                <div className="signup">
                    <h2 className="form-title" id="signup"><span>or</span>Sign up</h2>
                    <div className="form-holder">
                        <input type="text" className="input" placeholder="Name" />
                        <input type="password" className="input" placeholder="Password" />
                    </div>
                    <button className="submit-btn">Sign up</button>
                </div>
                <div className="login slide-up">
                    <div className="center">
                        <h2 className="form-title" id="login"><span>or</span>Log in</h2>
                        <div className="form-holder">
                            <input type="text" className="input" placeholder="Name" />
                            <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button className="submit-btn">Log in</button>
                    </div>
                </div>
            </div>

        </Container>

    );
}

export default Forms;