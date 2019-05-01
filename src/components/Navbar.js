import React, {Fragment} from 'react'

const Navbar = (props) => {
  return (
    <Fragment>
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1"> Result: {props.result} </span>
      <span class="navbar-brand mb-0 h1"> Top Score: {props.top} </span>
      <span class="navbar-brand mb-0 h1"> Current Score: {props.current} </span>
    </nav>
    </Fragment>
  )
}

export default Navbar
