import React from 'react';
import './NewCollection.css'
import new_collection from '../assets/new_collections'
import Item from '../Items/Item'

const NewCollection = () => {
  return (
    <div className='newcollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
            {new_collection.map((e,i)=>{
                return <Item key={i} image={e.image} old_price={e.old_price} new_price={e.new_price} name={e.name} id={e.id} />
            })}
      </div>
    </div>
  )
}

export default NewCollection


