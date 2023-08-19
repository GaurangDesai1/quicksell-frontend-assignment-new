import React from 'react';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <div className="card-id">{ticket.id}</div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-tag">{ticket.tag.join(', ')}</div>
    </div>
  );
};

export default Card;
