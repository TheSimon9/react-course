import React from "react";

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
        console.log("Sono stato inizializzato")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUpdate() {
        console.log("Sono stato aggiornato")
    }

    componentWillUnmount() {
        console.log("Sono stato smontato")
        clearInterval(this.timerID);
    }

    tick() {
        console.log("Sto per aggiornare lo state")
        this.setState({
            date: new Date()
        });
    }

    render() {
      return (
        <div>
          <h1>Class component</h1>
          <h2>Sono le {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Clock