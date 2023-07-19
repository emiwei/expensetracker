import './App.css';
import Dashboard from './dashboard.js'
import { Amplify, API } from 'aws-amplify';

const myAPI = 'api630c679d';
const path = '/customers';

function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
