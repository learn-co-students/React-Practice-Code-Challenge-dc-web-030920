import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(event) => props.moreSushi()}>
            More sushi!
          </button>
}

export default MoreButton