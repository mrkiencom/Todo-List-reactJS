import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FiCheck } from 'react-icons/fi';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "kien",
      input: '',
      stt: 0,
      values: "",
      data: [],
      arr: []
    }
  }

  setValue(event) {
    this.setState({
      input: event.target.value
    })
  }
  setClick() {
    if (this.state.input != "") {
      this.state.arr.push(this.state.input)
      this.state.data.push(<li class="uncheck" onClick={this.Select(this.state.stt)}>{this.state.arr[this.state.stt]}</li>)

      this.setState(
        {
          stt: this.state.stt + 1,
          input: ""
        }
      )
      console.log(this.state.stt)
    }
  }
  Select(iteam) {
    return (event) => {
      if (this.state.data[iteam] != null) {
        if (this.state.data[iteam].props.class == "uncheck") {
          this.setState(
            {
              data: this.state.data.fill(<li class="iteam-checked">
                <li class="checked" onClick={this.Select(iteam)}>
                  <FiCheck class="Ficheck" />
                  {this.state.arr[iteam]}
                </li>
                <span class="checked" onClick={this.delete(iteam)}>x</span>
              </li>, iteam, iteam + 1)
            }
          )
        }
        else this.setState(
          {
            data: this.state.data.fill(<li class="uncheck" onClick={this.Select(iteam)}>
              {this.state.arr[iteam]} </li>, iteam, iteam + 1)
          }
        )
      }
    }
  }
  delete(iteam) {
    return (event) => {
      console.log(this.state.data[iteam]);
      delete this.state.data[iteam]
      this.setState({
        data: this.state.data
      })
    }
    console.log(this.state.data[iteam]);
  }
  render() {
    return (
      <div className="App" >
        <div className="todo-list">
          <span class="title">Todo-List</span>
          <input value={this.state.input} onChange={this.setValue.bind(this)}></input>
          <button onClick={this.setClick.bind(this)}> + </button>
        </div>
        <ul class="begin">{this.state.data}</ul>
      </div>
    );
  }
}

export default App;
