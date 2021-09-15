import React, { Component } from 'react';

class Cronometer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    console.log('componentDidMount');
    const ONE_SECOND = 1000;

    this.intervalID = setInterval(() => {
      console.log('Atualizou o estado');
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, ONE_SECOND);
  }

  componentDidUpdate(prevProps, prevState) {
    const TIME_LIMIT = 10;
    // const { seconds } = this.state;
    if (prevState.seconds === TIME_LIMIT) {
      // alert('Cabou o tempo');
      this.setState({ seconds: 0 });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { seconds } = this.state;
    return (
      <h2>
        {seconds}
      </h2>
    );
  }
}

export default Cronometer;