import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

function Grandchild() {
  const { setUserName } = useContext(AppContext);

  function handleClick() {
    setUserName("ChangedFromGrandChild");
  }

  return (
    <div>
     <p>  This is GrandChild's div</p> 
     <p>  Need to change parent name from here:</p> 
        <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default Grandchild;
