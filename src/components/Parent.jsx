import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import Child from "./Child";

function Parent() {

    const { userName, } = useContext(AppContext);

    return ( 
        <div>
            <p>This is Parent's div :</p>
            My name :
            {userName}
            <Child />
            
        </div>
     );
}

export default Parent;