import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
function NotFound() {
  return (
    <div className="wrapper">
        <h1>Not found</h1>
        <NavLink to="/video">back</NavLink>
    </div>
  );
}

export default NotFound;
