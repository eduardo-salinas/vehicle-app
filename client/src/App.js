import { Route } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Route component={LandingPage}
        exact path='/' />
      <Route component={NavBar}
        path={['/home', '/properties/:id']} />
      <Route component={Home}
        path='/home' />
    </>
  );
}

export default App;
