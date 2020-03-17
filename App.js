import React, {Component} from 'react';
import {StyleSheet, Text, Button, View, TouchableOpacity} from 'react-native';

class StopWatch extends Component {
  state = {
    timer: null,
    counter: '00',
    miliseconds: '00',
    startDisabled: true,
    stopDisabled: false,
  };

  constructor(props) {
    super(props);

    this.onButtonStart = this.onButtonStart.bind(this);
    this.onButtonStop = this.onButtonStop.bind(this);
    this.onButtonClear = this.onButtonClear.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidMount() {
    // this.start();
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  start() {
    var self = this;
    let timer = setInterval(() => {
      var num = (Number(this.state.miliseconds) + 1).toString(),
        count = this.state.counter;

      if (Number(this.state.miliseconds) == 60) {
        count = (Number(this.state.counter) + 1).toString();
        num = '00';
      }

      self.setState({
        counter: count.length == 1 ? '0' + count : count,
        miliseconds: num.length == 1 ? '0' + num : num,
      });
    }, 1000);
    this.setState({timer});
  }

  onButtonStart() {
    this.start();
    this.setState({startDisabled: true, stopDisabled: false});
  }

  onButtonStop() {
    clearInterval(this.state.timer);
    this.setState({startDisabled: false, stopDisabled: true});
  }

  onButtonClear() {
    clearInterval(this.state.timer);
    this.setState({
      timer: null,
      counter: '00',
      miliseconds: '00',
    });
  }

  render() {
    return (
      <View>
        <View>
          <Text>
            Sec
            {this.state.miliseconds}
          </Text>
          <Text>
            Min
            {this.state.counter}
          </Text>
        </View>
        <TouchableOpacity onPress={() => this.onButtonStart()}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onButtonStop()}>
          <Text>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onButtonClear()} >
                <Text>
                  clear
                </Text>
              </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 60,
    textAlign: 'center',
    height: 60,
    margin: 10,
  },
  miniCounter: {
    fontSize: 20,
    position: 'relative',
    top: -32,
    right: -50,
  },
});

module.exports = StopWatch;
