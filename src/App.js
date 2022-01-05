import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { Component } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setConter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    // setReverse((reverse) => !reverse);
  };

  const handleCounter = () => {
    setConter(counter + 1);
    // setConter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <p>Contador: {counter}</p>
        <button onClick={handleClick}>Reverse {reverseClass}</button>
        <br />
        <button onClick={handleCounter}>Increment</button>
      </header>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reverse: false,
//     };
//   }

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button onClick={this.handleClick}>Reverse {reverseClass}</button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
