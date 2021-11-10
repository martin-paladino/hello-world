import Grid from "./components/Grid";
import courses from "./utils/courses.json"

function App() {

const   {course}=courses


  return (
    <>
      <Grid data= {course }/>
    </>
  );
}

export default App;
