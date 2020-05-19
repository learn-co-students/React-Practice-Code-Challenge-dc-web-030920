import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  let sushiIndex= props.index
  console.log(sushiIndex) 

  return (
    <Fragment>
      <div className="belt">

    {
      props.sushis.map(sushi => <Sushi onClickToEat={props.onClickToEat} data={sushi} eaten={props.eaten.includes(sushi)} key={sushi.id} /> )
    }
    {/* // eaten=props.eaten.includes(sushi)  returns a boolean for use on next level  */}


        <MoreButton morePlease={props.morePlease} />
      </div>
    </Fragment>
  )
}

export default SushiContainer