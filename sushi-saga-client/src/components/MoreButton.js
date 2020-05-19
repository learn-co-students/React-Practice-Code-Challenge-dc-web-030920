import React from 'react'

const MoreButton = (props) => {
  ///why does this onclick have 'null' as a default? 
    return <button onClick={props.morePlease}>
            More sushi!
          </button>
}

export default MoreButton