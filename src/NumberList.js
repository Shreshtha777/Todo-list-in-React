import React from 'react';

function NumberList(props) {
    
    const items = props.data;
    const listItems = items.map((items,id) =>
      <li key={id} className='list-group-item'>{items}<button className='btn btn-danger mx-5' onClick={()=>{props.deleteItem(id)}}> X</button></li>
    );
    return (
      <ul className='list-group'>{listItems}</ul>
    );
  }
export default NumberList;
