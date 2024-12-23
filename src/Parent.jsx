import { useState } from "react";
import MouseTracker from "./MouseTracker";


//mount and unmount tracker
function Parent(){
    const[showComponent,setShowComponent]=useState(true);

    const toggleComponent=()=>{
        setShowComponent((prev)=>!prev);
    };

    return (
        <div>
            <button onClick={toggleComponent}>
                {showComponent ?'Unmount Tracker':'Mount Tracker'};
            </button>

            {showComponent && <MouseTracker /> }
        </div>
    )
};

export default Parent;