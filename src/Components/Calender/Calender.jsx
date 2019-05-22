/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import Scheduler, { SchedulerData, ViewTypes, DemoData } from 'react-big-scheduler';
import 'antd/lib/style/core/index.less';
import 'antd/lib/style/themes/default.less';
import withDragDropContext from './withDnDContext';


class Basic extends Component {
  constructor(props) {
    super(props);
    console.log(props)

    const schedulerData = new SchedulerData('2019-01-01', ViewTypes.Week);
    schedulerData.localeMoment.locale('fr');
    schedulerData.setResources(DemoData.resources);
    schedulerData.setEvents(DemoData.events);
    this.state = {
      viewModel: schedulerData,
    };
  }


    prevClick = (schedulerData) => {
      schedulerData.prev();
      schedulerData.setEvents(DemoData.eventsForTaskView);
      this.setState({
        viewModel: schedulerData,
      });
    }

    nextClick = (schedulerData) => {
      schedulerData.next();
      schedulerData.setEvents(DemoData.eventsForTaskView);
      this.setState({
        viewModel: schedulerData,
      });
    }

    onViewChange = (schedulerData, view) => {
      schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
      schedulerData.config.creatable = !view.isEventPerspective;
      schedulerData.setEvents(DemoData.eventsForTaskView);
      this.setState({
        viewModel: schedulerData,
      });
    }

    onSelectDate = (schedulerData, date) => {
      schedulerData.setDate(date);
      schedulerData.setEvents(DemoData.eventsForTaskView);
      this.setState({
        viewModel: schedulerData,
      });
    }

    eventClicked = (schedulerData, event) => {
      alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops1 = (schedulerData, event) => {
      alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops2 = (schedulerData, event) => {
      alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
      if (window.confirm(`Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`)) {
        let newFreshId = 0;
        schedulerData.events.forEach((item) => {
          if (item.id >= newFreshId) { newFreshId = item.id + 1; }
        });

        const newEvent = {
          id: newFreshId,
          title: 'New event you just created',
          start,
          end,
          resourceId: slotId,
          bgColor: 'purple',
        };
        schedulerData.addEvent(newEvent);
        this.setState({
          viewModel: schedulerData,
        });
      }
    }

    updateEventStart = (schedulerData, event, newStart) => {
      if (window.confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
        schedulerData.updateEventStart(event, newStart);
      }
      this.setState({
        viewModel: schedulerData,
      });
    }

    updateEventEnd = (schedulerData, event, newEnd) => {
      if (window.confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
        schedulerData.updateEventEnd(event, newEnd);
      }
      this.setState({
        viewModel: schedulerData,
      });
    }

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
      if (window.confirm(`Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`)) {
        schedulerData.moveEvent(event, slotId, slotName, start, end);
        this.setState({
          viewModel: schedulerData,
        });
      }
    }

    subtitleGetter = (schedulerData, event) => schedulerData.isEventPerspective ? schedulerData.getResourceById(event.resourceId).name : event.groupName

    render() {
      const { viewModel } = this.state;
      return (
        <div>
          <div>
            <h3 style={{ textAlign: 'center' }}>

            </h3>
            <Scheduler
              schedulerData={viewModel}
              prevClick={this.prevClick}
              nextClick={this.nextClick}
              onSelectDate={this.onSelectDate}
              onViewChange={this.onViewChange}
              eventItemClick={this.eventClicked}
              viewEventClick={this.ops1}
              viewEventText="Ops 1"
              viewEvent2Text="Ops 2"
              viewEvent2Click={this.ops2}
              updateEventStart={this.updateEventStart}
              updateEventEnd={this.updateEventEnd}
              moveEvent={this.moveEvent}
              newEvent={this.newEvent}
              subtitleGetter={this.subtitleGetter}
            />
          </div>
        </div>
      );
    }
}

export default withDragDropContext(Basic);
