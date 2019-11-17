import React from 'react',
const { Button, Modal, ModalHeader, ModalBody, ModalFooter } = Reactstrap;

class Modal1 extends React.Component {
  render() {
    return (
        <React.Fragment>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          {this.props.children}
        </React.Fragment>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalType: 1
    };

    this.toggle = this.toggle.bind(this);
    this.changeModalType = this.changeModalType.bind(this);
  }

  changeModalType(type) {
    this.setState({modalType: type});
  }
  
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  renderDisplayModal() {
  return(
  <React.Fragment>
          <ModalBody>
              This is display modal
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.changeModalType(2)}>Open Update Modal</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </React.Fragment>
  );
  }
  
  renderUpdateModal() {
    return(
  <React.Fragment>
          <ModalBody>
              This is update modal
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.changeModalType(1)}>Open Display Modal</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Open</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Modal1 click={this.toggle} title={this.state.modalType === 1 ? 'Display title' : 'Update Modal'}>
            {this.state.modalType === 1
              ? this.renderDisplayModal()
              : this.renderUpdateModal()
            }
          </Modal1>
        </Modal>
      </div>
    );
  } 
}
