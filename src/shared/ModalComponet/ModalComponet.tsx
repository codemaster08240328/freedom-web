import React from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'reactstrap';
import Button from '../buttons/Button';
import { Img } from './ModalComponet.style';

export interface IProps {
  modalTitle: string;
  modalBody: string;
  btnModalText: string;
  imageIcon: any;
}

class ModalView extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { modalTitle, imageIcon, modalBody, btnModalText } = this.props;

    return (
      <React.Fragment>
        <span onClick={this.toggle}>
          <Img src={imageIcon} />
        </span>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{modalTitle}</ModalHeader>
          <ModalBody>{modalBody}</ModalBody>
          <ModalFooter>
            <Button primary={true} onClick={this.toggle}>
              {btnModalText}
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalView;
