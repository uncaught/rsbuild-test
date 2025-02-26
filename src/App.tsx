import './App.css';
import css from 'styled-jsx/css';

/*language=SCSS*/
const {className, styles} = css.resolve`
  .some-css-class {
    background-color: darkred;
    color: white;

    h1 {
      color: chartreuse;
    }
  }
`;

const App = () => {
  return (
    <div className={`${className} some-css-class`}>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      {styles}
    </div>
  );
};

export default App;
