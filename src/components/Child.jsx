import Grandchild from "./Grandchild";

function Child() {
    return ( 
        <div>

            <p> This is Child's div</p>
            <Grandchild />
            
        </div>
     );
}

export default Child;