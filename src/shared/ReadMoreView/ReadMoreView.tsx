import React, { Component } from "react";
import { ReadMore } from './ReadMoreView.style';

export interface IProps {
  title: string | JSX.Element;
  subTitle: string;
  textArea: string;
  subTitleMore: string;
  textAreaMore: string;
  subTitleExtra: string;
  textAreaExtra: string;
}

class ReadMoreView extends Component<IProps> {
  render() {
    const { title, subTitle, textArea, subTitleMore, textAreaMore, subTitleExtra, textAreaExtra } = this.props;
    return (
      <React.Fragment>
        <h3 className="title text-center">{title}</h3>
        <ReadMore>
          <input type="checkbox" className="read-more-state" id="post-1"/>
          <div className="read-more-wrap text-center">
            <p><strong>{subTitle}</strong></p>
            <p className=" p-b-0">{textArea}</p>
            <div className="read-more-target">
              <p className="p-b-0 m-b-5"><strong>{subTitleMore}</strong></p>
              <p>{textAreaMore}</p>
              <p className="subTitle p-b-0 m-b-5">{subTitleExtra}</p>
              <p>{textAreaExtra}</p>
            </div>
          </div>
          <label htmlFor="post-1" className="read-more-trigger"/>
        </ReadMore>
      </React.Fragment>
    );
  }
}

export default ReadMoreView;