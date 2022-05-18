import React from 'react'

const InputField = ({text, setText, addTask}) => {
  return (
    <label>
        <input type={'text'} value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTask}>Add todo</button>
      </label>
  )
}

export default InputField