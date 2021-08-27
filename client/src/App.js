import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Route component={LandingPage}
        exact path='/' />
    </>
  );
}

export default App;
