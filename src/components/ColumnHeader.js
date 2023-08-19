import React from 'react';

import todoSymbol from '../images/todo.png'; 
import inProgressSymbol from '../images/inprogress.png'; 
import backlogSymbol from '../images/backlog.png'; 

import noPrioritySymbol from '../images/nopriority.png'; 
import urgentSymbol from '../images/urgent.png'; 
import highPrioritySymbol from '../images/high.png';
import mediumPrioritySymbol from '../images/medium.png';
import lowPrioritySymbol from '../images/low.png'; 

import addSymbol from '../images/add.png';

const ColumnHeader = ({ header, ticketCount }) => {
  return (
    <div className="column-header">
    
    {/* symbols for status */}
      {header === 'Todo' && <img src={todoSymbol} alt="Todo Symbol" className="symbol-icon" />}
      {header === 'In progress' && <img src={inProgressSymbol} alt="In Progress Symbol" className="symbol-icon" />}
      {header === 'Backlog' && <img src={backlogSymbol} alt="Backlog Symbol" className="symbol-icon" />}
    
    {/* symbols for priority */}
      {header === 'No priority' && <img src={noPrioritySymbol} alt="No Priority Symbol" className="symbol-icon" />}
      {header === 'Urgent' && <img src={urgentSymbol} alt="Urgent Symbol" className="symbol-icon" />}
      {header === 'High' && <img src={highPrioritySymbol} alt="High Priority Symbol" className="symbol-icon" />}
      {header === 'Medium' && <img src={mediumPrioritySymbol} alt="Medium Priority Symbol" className="symbol-icon" />}
      {header === 'Low' && <img src={lowPrioritySymbol} alt="Low Priority Symbol" className="symbol-icon" />}
     
      <div>{header}</div>
      <div className="card-count">
        {ticketCount}
      </div>
      
      <button className='button-add'>
        <img src={addSymbol} alt="Add Symbol" className="symbol-icon"/>
      </button>

    </div>
  );
};

export default ColumnHeader;
