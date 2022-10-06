import {
  BrowserRouter,
  Route,
  Router,
  Routes,
} from 'react-router-dom';

import SharedLayout from './Components/SharedLayout';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
