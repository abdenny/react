import React from 'react';
import data from '../data/virus';

function Virus(props) {
  return (
    <div>
      {props.virus}
      <br />
      {props.country}
      <br />
      {props.nums}
      <hr />
    </div>
  );
}

export default Virus;
