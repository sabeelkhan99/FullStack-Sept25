import TodoApp from "./components/TodoApp"
import { Fragment } from "react";
import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  return (
      <Fragment>
          {/* <Counter/> */}
        <TodoApp />
    </Fragment>
  )
}

export default App;