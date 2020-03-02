import * as React from 'react';
import { faPhone, faArrowRight, faVolumeMute, faVolumeOff } from '@fortawesome/free-solid-svg-icons'

import {
  FooterMainContainer,
  ButtonsWrapper,
  Button,
  ButtonText,
  DialIconContainer,
  TextDialIcon,
  TextArrowIcon,
  EndCallIconContainer,
  TextDialEndCallIcon,
  VolumeOffIconContainer,
  TextVolumeOffIcon,
} from './Footer.style'

import { IDialStore } from '../store'
interface IProps {
  store: IDialStore;
}

export default class FooterView extends React.Component<IProps> {
  handleDial = () => {
    this.props.store.startCall();
  };

  handleEndCall = () => {
    this.props.store.endCall();
  };

  handleParkCall = () => {
    this.props.store.parkCall();
  };

  render() {
    return (
      <FooterMainContainer>
        <ButtonsWrapper>
          <Button id="dialFooterStartCallButton" onClick={this.handleDial}>
            <DialIconContainer>
              <TextDialIcon icon={faPhone}/>
              <TextArrowIcon icon={faArrowRight} />
            </DialIconContainer>
            <ButtonText>Dial</ButtonText>
          </Button>
          <Button id="dialFooterEndCallButton" onClick={this.handleEndCall}>
            <EndCallIconContainer>
              <TextDialEndCallIcon icon={faPhone} />
            </EndCallIconContainer>
            <ButtonText>End Call</ButtonText></Button>
          <Button id="dialFooterParkCallButton" onClick={this.handleParkCall}>
            <VolumeOffIconContainer>
              <TextVolumeOffIcon icon={faVolumeMute} />
            </VolumeOffIconContainer>
            <ButtonText id="dialFooterParkCallText">Park Call</ButtonText>
          </Button>
        </ButtonsWrapper>
      </FooterMainContainer>
    )
  }
}