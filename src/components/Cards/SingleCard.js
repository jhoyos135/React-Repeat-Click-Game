import React, {Fragment} from 'react'

const SingleCard = (props) => {
    const {id, image} = props;

  return (
    <div 
    id={id} 
    className='custom_single_card' 
    value={id} 
    onClick={() => props.clicked(props.id)}>
        <Fragment>
            <img src={image} alt=""/>
        </Fragment>
    </div>
  )
}

export default SingleCard
