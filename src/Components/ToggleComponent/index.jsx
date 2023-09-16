import { useState } from "react"

const ToggleComponent = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleState = () =>{
        setIsOn(!isOn);
    };
  return (
    <div>
        <button onClick={toggleState} >Click Here</button>
        <p>State is {isOn ? 'ON' : 'OFF'}</p>


    </div>
  )
}

export default ToggleComponent