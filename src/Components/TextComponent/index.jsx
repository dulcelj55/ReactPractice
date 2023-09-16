import { useState } from "react"

const TextComponent = () => {
    const[text, setText] = useState("Original Text")
  return (
    <div>
        <p>{text}</p>
        <button onClick={() => setText ('Updated Text')}>Update Text</button>


    </div>
  )
}

export default TextComponent