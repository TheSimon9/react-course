function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Christian"),
    React.createElement("h2", {}, "Software Engineer"),
    React.createElement("p", {}, "Hi, my name is Christian, how are you?")
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById("react-container"));
