import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <p>Emails App</p>
      <Outlet />
    </div>
  );
};

export default App;
