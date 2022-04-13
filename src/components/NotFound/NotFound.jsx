import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
function NotFound() {
  return (
    <div className="wrapper" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{}}><strong>404</strong> - Страница не найдена</h1>
        <NavLink to="/video">Вернуться назад</NavLink>
    </div>
  );
}

export default NotFound;
