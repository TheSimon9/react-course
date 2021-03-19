function SoftwareDeveloper(props){
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.role),
        React.createElement("p", {}, props.bio)
    ])
}


function App(){
    return React.createElement("div", {}, [
        React.createElement(SoftwareDeveloper, {
            name:"Christian",
            role: "Software Engineer",
            bio: "Hi there!"
        }),
        React.createElement(SoftwareDeveloper, {
            name: "Manuel",
            role: "Software Engineer",
            bio:"Hi there, i'm manuel!"
        })
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById("react-container"));