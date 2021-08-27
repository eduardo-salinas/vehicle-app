import { Route } from 'react-router-dom';
import Categories from './components/Categories';
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
        path={['/home', '/categories/:id']} />
      <Route component={Home}
        exact path='/home' />
        <Route component={Categories}
        path='/categories/:id' />
    </>
  );
}

export default App;
