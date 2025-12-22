import TodoApp from "./components/TodoApp"
import { Fragment } from "react";
import "./App.css";
import Counter from "./components/Counter";
import FormikDemo from "./components/FormikDemo";

const App = () => {
  return (
      <Fragment>
          {/* <Counter/> */}
          {/* <FormikDemo/> */}
        <TodoApp />
    </Fragment>
  )
}

export default App;