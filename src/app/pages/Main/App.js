import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ClustersBoardContainer from './components/ClustersContainer';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header title="CHALLENGE" />
      <ClustersBoardContainer />
      <Footer />
    </div>
  );
}

export default App;
