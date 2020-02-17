import * as React from 'react';
import ReactDOM from 'react-dom';

const ModalDiv = document.getElementById('Modal');

 class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }


  componentDidMount() {
    ModalDiv.appendChild(this.el);
  }

  componentWillUnmount(){
    ModalDiv.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        {this.props.children}
        <button onClick={this.props.close}>Close</button>
      </div>,
      this.el
    )
  }
}
export default Modal;