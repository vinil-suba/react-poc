// import fs from 'fs';
// import freemarker from 'freemarker-parser';

// const freemarker = require('freemarker-parser');

// const parser = new freemarker.Parser();
// const filePath = 'src/ftl-files/test.ftl';


// function getData() {
//   const template = fs.readFileSync(filePath, 'utf-8');
//   const data = parser.parse(template, {
//     parseLocation: false,
//   });

//   console.log('AST Tree', data.ast)
//   console.log('Tokens', data.tokens);
// }

// getData();

import React from 'react';
import ReactDOM from 'react-dom/client';

const message = React.createElement(
    "h1",
    {id: "idTag", xyz:"abcd"},
    "Hello world from react"
   );

   const useingJSX = <h1 id="heading">Hello world from JSX world</h1>;
    const renderRoot = ReactDOM.createRoot(document.getElementById("root"));
    // renderRoot.render(message);
    // renderRoot.render(useingJSX); 

    // react component

    const variable = (<h2 id="anyValue">content from h2 tag element</h2>);
    const CustomComponent = () => <h1 id="hello-world">hello world from component</h1>;
    const CustomComponentOne = () =>( 
    <div id="abcXyz">
        {variable}
        <CustomComponent/>
        <h1 id="hello-world">hello world from component one</h1>
    </div>
    );
     
    renderRoot.render(<CustomComponentOne/>); 