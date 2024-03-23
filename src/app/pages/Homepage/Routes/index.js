import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from "../index";

const ContentRoute = ({ path, component: Component }) => {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
};

export default ContentRoute;
