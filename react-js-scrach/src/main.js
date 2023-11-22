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


const message = React.createElement(
  "h1",
  {id: "idTag", xyz:"abcd"},
  "Hello world from react"
 );
  const renderRoot = ReactDOM.createRoot(document.getElementById("root"));
  renderRoot.render(message);


