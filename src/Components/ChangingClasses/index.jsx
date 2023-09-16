import React, { useState } from 'react'

const ChangingClasses = () => {
    const [boxClass, setBoxClass] = useState('original-class');
  return (
    <div>
        <div className={boxClass}>
        <button onClick={()=> setBoxClass('updated-class')}>Update Class</button>
        {console.log("updated")}
        </div>
    </div>
  )
}

export default ChangingClasses