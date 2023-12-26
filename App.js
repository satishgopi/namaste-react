const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "child one"),
    React.createElement("h2", {}, "child two"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "child 2"),
    React.createElement("h2", {}, "child 2"),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
