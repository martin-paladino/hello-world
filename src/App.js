import Grid from "./components/Grid";
import courses from "./utils/courses.json"

import Cards from "./commons/Card"
import Register from "./components/Register"
import Login from "./components/Login"

function App() {

const {course}=courses


  return (
    <>
    <Grid data={course} />
    <Login></Login>
      <Register/>
    </>
  );


  }
export default App;
