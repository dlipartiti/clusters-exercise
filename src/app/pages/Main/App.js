import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ClustersContainer from './components/ClustersContainer';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header title="CHALLENGE" />
      <ClustersContainer />
      <Footer />
    </div>
  );
}

export default App;
