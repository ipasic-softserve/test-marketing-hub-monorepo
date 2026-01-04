import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <p>App</p>
      <Link to='/emails'>Go to Emails</Link>
      <br />
      <Link to='/designs'>Go to Designs</Link>
      <br />
      <Outlet />
    </div>
  );
};

export default App;
