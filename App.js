const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");

const paragraph = React.createElement("p", {}, "this is p tag from react");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(heading)