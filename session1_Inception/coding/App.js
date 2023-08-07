const heading1=React.createElement("h1",
{
  id:"heading1"
},
"heading1");

const heading2=React.createElement("h2",
{
    id:"heading2"
},
"heading2");

const container=React.createElement("div",
{
    id:"container"
},
[heading1,heading2]);

//create Root using ReactDOM

const root=ReactDOM.createRoot(document.getElementById("root"));

//passing react element into the root
root.render(container);