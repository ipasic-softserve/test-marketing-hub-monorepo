import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <p>Designs App</p>
      <Outlet />
    </div>
  );
};

export default App;
