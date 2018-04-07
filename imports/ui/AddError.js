import React from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';

export default class AddError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      isOpen: false,
      error: ''
    }
  }
  onSubmit(e) {
    //const url = this.state.url; same thing as below
    const { url } = this.state;

    e.preventDefault();

    Meteor.call('errors.insert', url, (err, res) => {
      if (!err) {
        this.handleModalClose();
      } else {
        this.setState({ error: err.reason });
      }
    });

  }
  onChange(e) {
    this.setState({
      url: e.target.value
    });
  }
  handleModalClose() {
    this.setState({
      isOpen: false,
      url: '',
      error: ''
    });
  }
  render() {
    return (
      <div>
        <button className="button" onClick={() => this.setState({ isOpen: true })}>+ Add Error</button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add Error"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.handleModalClose.bind(this)}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal">
          <p>Add Error</p>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onClick={this.onSubmit.bind(this)} className="boxed-view__form">
            <input
              type="text"
              ref="ISBN"
              placeholder="ISBN"
              value={this.state.url}
              onChange={this.onChange.bind(this)}/>
            <input
              type="text"
              ref="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.onChange.bind(this)}/>
              <button className="button">Add Error</button>
              <button type="button" className="button button--secondary" onClick={this.handleModalClose.bind(this)}>Cancel</button>
          </form>

        </Modal>
      </div>
    );
  }
}
