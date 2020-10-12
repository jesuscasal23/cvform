import React from "react"

const InputField= (props) => {
  return (
    <div className="user-box">
        <label>{props.label}:</label>
        <input
          type="text"
          value={props.value}
          name={props.label}
          group= {props.formgroup}
          onChange={(e) => props.handleChange(e, props.formgroup)}
        />
    </div>
  )
}

export default InputField