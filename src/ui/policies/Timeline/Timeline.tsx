import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { Table, CustomInput } from 'reactstrap';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { IEvent, ITimelineData } from '../types';
import TimelineStore from './store';
import CheckboxField from '@src/shared/CheckboxField';
import {
  FilterDataWrapper,
  FilterHeaderWrapper,
  CheckFieldWrapper,
  TR,
  ActiveTR,
  TH,
  TD,
  CheckboxTH,
  CheckboxTD,
  ActionsTD,
  FontAwesome
} from './Timeline.style';


@observer
export default class Timeline extends Component<any> {
  onAddAction = () => {
    console.log('add action')
  }

  renderTimeline = (timelines: ITimelineData): JSX.Element => {
    if (!timelines || timelines.length === 0) {
      return <p>No timelines</p>;
    }

    return (
      <Table borderless={true} striped={true}>
        <thead>
          <TR>
            <CheckboxTH>
              <CustomInput
                type="checkbox"
                id="checkHead"  
                label=""
              />
            </CheckboxTH>
            <TH>Date</TH>
            <TH>Filter</TH>
            <TH>Summary</TH>
            <TH>Actions</TH>
          </TR>
        </thead>
        <tbody>
          {timelines.map(
            (timeline: IEvent, key: number): JSX.Element => {
              return (
                <ActiveTR key={key}>
                  <CheckboxTD>
                    <CustomInput
                      type="checkbox"
                      id="timelineCheckHead"
                      label=""
                    />
                  </CheckboxTD>
                  {Object.keys(timeline).map(
                    (keyname: string, ind: number): JSX.Element => {
                      const field = timeline[keyname];
                      return (
                        <TD key={ind}>
                          {field}
                        </TD>)
                    }
                  )}
                  <ActionsTD>
                    <FontAwesome
                      onClick={this.onAddAction}
                      icon={faPlus}
                    />
                    <FontAwesome icon={faPen} />
                  </ActionsTD>
                </ActiveTR>
              )}
          )}
        </tbody>
      </Table>
    );
  };

  render() {
    const {
      filterData,
      changeFields,
    } = TimelineStore;

    return (
      <React.Fragment>
        <FilterHeaderWrapper primary={true}>
          {Object.keys(
            filterData).map((key, ind) => {
            const filter = filterData[key];

            return  <CheckFieldWrapper key={ind}>
                      <CheckboxField
                        btnText={filter.text}
                        onChange={changeFields(filter.key)}
                        checked={filter.active}
                        id={filter.key}
                      />
                    </CheckFieldWrapper>
          })}
        </FilterHeaderWrapper>
        <FilterDataWrapper primary={true}>
          {TimelineStore.getAllTimelinesResult.case({
            pending: () => <div>Loading...</div>,
            rejected: error => <div>Ooops.. {error}</div>,
            fulfilled: () => this.renderTimeline(TimelineStore.activeTimelines)
          })}
        </FilterDataWrapper>
      </React.Fragment>
    )
  }
}
