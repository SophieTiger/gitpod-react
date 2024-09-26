import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" /> */}
      <StatefulGreeting greeting="I'm a stateful greeting" name="Mike"/>
    </div>
  );
}

export default App;
