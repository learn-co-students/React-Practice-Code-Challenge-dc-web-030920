import React, { Fragment } from 'react'

const Sushi = (props) => {


  return (
    <div className="sushi">
      <div className="plate" 
          key={props.data.id} 
           onClick={ () => 
           props.onClickToEat(props.data)}>
        {  props.eaten ? null : <img src={props.data.img_url} alt="sushi" width="100%" />
          }
        
      </div>
      <h4 className="sushi-details">
        {props.data.name} - ${props.data.price}
      </h4>
    </div>
  )
}

export default Sushi