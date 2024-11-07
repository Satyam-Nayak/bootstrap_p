import './App.css';
import Compo1 from './Compo1';
import BasicExample from './Compo2';
import Compo3 from './Compo3';
import Compo4 from './Compo4'; // Adjust the path if needed
import Compo5 from './Compo5';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Compo1/>
      <br />
      <BasicExample/>
      <br />
      <Compo3/>
      <br /><br /><br /><br />
      <Compo4/>
      <br /><br /><br />
      <Compo5/>
    </div>
  );
}

export default App;
