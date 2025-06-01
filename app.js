const heading = [React.createElement("div",{id:'parent'},
    React.createElement('div',{id:'child'},
        [React.createElement("h1",{},"This is H1 Tag"),
        React.createElement('h2',{},"this is H2 Tag")]
    )),
    React.createElement("div",{id:'parent'},
        React.createElement('div',{id:'child'},
            [React.createElement("h1",{},"This is H1 Tag"),
            React.createElement('h2',{},"this is H2 Tag")]
        ))
];

console.log(heading);


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);






























// const parent = React.createElement(
//     "div",{id:'parent'},React.createElement(
//         "div",{id:"child"},[React.createElement("h1",{id:'h1tag'},"Iam H1 Tag"),React.createElement("h2",{id:"h2tag"},"Iam H2 Tag")]
//     ))
//     
// console.log(parent);

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)
