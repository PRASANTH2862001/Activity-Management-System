import { useLocation } from "react-router-dom";
import Topcomponent from "./components/Topcomponent";
function App() {

     const date=useLocation()
     console.log(date.state.user);
     
  return (
    <>
    
      <div className="bg-black p-10">
        <Topcomponent name1={date.state.user} />
      </div>
      <div>

      </div>
    </>

  );
}

export default App;
