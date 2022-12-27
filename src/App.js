import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  return (

    <div className="App">
      <h3>props : properties</h3>
    <Hello age={10} />
    {/* properties는 Hello 컴포넌트(function(여기)) 안으로 값이 들어간다. */}
    <Hello age={20}/>
    <Hello age={30}/>
  </div>
  ) 
};

export default App;