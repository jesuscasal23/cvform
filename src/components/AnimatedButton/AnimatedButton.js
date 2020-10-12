import React from "react"

const AnimatedButton = (props) => (
<button className="glow-on-hover" type="submit" name={props.name}>{props.text}</button>
)

export default AnimatedButton