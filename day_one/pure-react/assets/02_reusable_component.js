/*
  Questo è un componente riutilizzabile.
  Il suo scopo è creare l'html necessario a mostrare i dati che riceve dalle props.
 */
function SoftwareDeveloper(props){
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.role),
    React.createElement("p", {}, props.bio)
  ]);
}

function App() {
  return React.createElement("div", {}, [
    React.createElement(SoftwareDeveloper, {
      name: "Christian",
      role: "Software Engineer",
      bio: "Hi, I'm Christian! How are you?"
    }),
    React.createElement(SoftwareDeveloper, {
      name: "Manuel",
      role: "Software Engineer",
      bio: "Hi, I'm Manuel!"
    })
  ])
}

ReactDOM.render(React.createElement(App), document.getElementById("react-container"));
