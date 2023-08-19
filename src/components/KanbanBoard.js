import React, { useState, useEffect } from 'react';
import Card from './Card';
import ColumnHeader from './ColumnHeader'; // Import the new component

const KanbanBoard = ({ displayOption, data, groupingOption, sortingOption }) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (!data.tickets || !data.users) return;

    let processedColumns = [];

    if (displayOption === 'display') {
      if (groupingOption === 'user') {
        // Group by user
        const uniqueUsers = Array.from(new Set(data.tickets.map((ticket) => ticket.userId)));
        processedColumns = uniqueUsers.map((userId) => ({
          header: data.users.find((user) => user.id === userId)?.name,
          tickets: data.tickets.filter((ticket) => ticket.userId === userId),
        }));
      } else if (groupingOption === 'priority') {
        // Group by priority
        const groupedTickets = Array.from({ length: 5 }, (_, index) =>
          data.tickets.filter((ticket) => ticket.priority === index)
        );
        const priorityNames = ['No priority', 'Urgent', 'High', 'Medium', 'Low'];
        processedColumns = groupedTickets.map((tickets, index) => ({
          header: `${priorityNames[index]}`,
          tickets: tickets,
        }));
      } else if (groupingOption === 'status') {
        // Group by status
        const uniqueStatuses = Array.from(new Set(data.tickets.map((ticket) => ticket.status)));
        processedColumns = uniqueStatuses.map((status) => ({
          header: `${status}`,
          tickets: data.tickets.filter((ticket) => ticket.status === status),
        }));
      }
    }

    // Sort the tickets within each column based on sorting option
    if (sortingOption === 'priority') {
      processedColumns.forEach((column) => {
        column.tickets.sort((a, b) => b.priority - a.priority);
      });
    } else if (sortingOption === 'title') {
      processedColumns.forEach((column) => {
        column.tickets.sort((a, b) => a.title.localeCompare(b.title));
      });
    }

    while (processedColumns.length < 5) {
      processedColumns.push({ header: '', tickets: [] });
    }

    setColumns(processedColumns);
  }, [displayOption, data, groupingOption, sortingOption]);


  return (
    <div className="kanban-board">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="column">
          <ColumnHeader header={column.header} ticketCount={column.tickets.length} />
          {column.tickets.map((ticket) => (
            <div key={ticket.id}>
              <Card ticket={ticket} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;