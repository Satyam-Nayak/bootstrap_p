import './App.css';
import Compo1 from './Compo1';
import BasicExample from './Compo2';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Compo1/>
      <br />
      <BasicExample/>
    </div>
  );
}

export default App;
