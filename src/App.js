import Employee from "./Employee";
import { useState } from "react";

function App() {
const [state,setState] = useState(false) 

  return (
    <div>
      <h1 onClick={()=>setState(!state)}>show/ hide</h1>
      {state? <Employee />: null}
    </div>
  );
}

export default App;
