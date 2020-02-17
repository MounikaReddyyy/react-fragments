// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { Component } from 'react';
import Hello from './Hello';
import './style.css';

import Modal  from './Modal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'React'
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  close = () => {
    this.setState({ showModal: false });
  }


  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div className="wrapper">
        <button onClick={this.showModal}>Open</button>
          {this.state.showModal &&
            <Modal close={this.close}>
              Testing content.
            </Modal>
          }
        </div>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

export default App;
