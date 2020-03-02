import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { CheckBtn } from './CheckButtonView.style';

export interface IProps {
  number: any;
  btnText: string;
}

class CheckButtonView extends Component<IProps, any> {
  constructor(props) {
    super(props);
    this.state = { cSelected: [] };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick = (selected) => () => {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  };

  render() {
    const { number, btnText } = this.props;
    return (
      <CheckBtn>
        <Button
          onClick={this.onCheckboxBtnClick(1)}
          active={this.state.cSelected.includes([{ number }])}>
          {btnText}
        </Button>

      </CheckBtn>
    );
  }
}

export default CheckButtonView;
