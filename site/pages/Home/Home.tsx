import React, { Component } from 'react';
import { Content } from 'site/layout';
import './style.scss';


type OnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
export default class InputFormatTest extends Component {
  state = {
    value: '',
  }

  componentDidMount() {
  }

  onChangeOne: OnChange = (event) => {
    const value = event.target.value;
    this.setState({
      value,
    })
  }


  render() {
    const { value } = this.state;
    return (
      <Content style={{ textAlign: 'left' }} className="home">
        home
      </Content>
    )
  }
}
