import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import KanbanBoard from './components/KanbanBoard';

function App() {
  const [data, setData] = useState({ tickets: [], users: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error('Error fetching data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [displayOption, setDisplayOption] = useState('');
  const [groupingOption, setGroupingOption] = useState('');
  const [sortingOption, setSortingOption] = useState('');

  useEffect(() => {
    const savedDisplayOption = localStorage.getItem('displayOption');
    const savedGroupingOption = localStorage.getItem('groupingOption');
    const savedSortingOption = localStorage.getItem('sortingOption');

    if (savedDisplayOption) {
      setDisplayOption(savedDisplayOption);
    }

    if (savedGroupingOption) {
      setGroupingOption(savedGroupingOption);
    }

    if (savedSortingOption) {
      setSortingOption(savedSortingOption);
    }
  }, []);

  useEffect(() => {
    if (displayOption) {
      localStorage.setItem('displayOption', displayOption);
    }

    if (groupingOption) {
      localStorage.setItem('groupingOption', groupingOption);
    }

    if (sortingOption) {
      localStorage.setItem('sortingOption', sortingOption);
    }
  }, [displayOption, groupingOption, sortingOption]);

  return (
    <div className="app">
      <TopBar
        onGroupingChange={setGroupingOption}
        onSortingChange={setSortingOption}
        selectedGroupingOption={groupingOption}
        selectedSortingOption={sortingOption}
      />
      <KanbanBoard
        displayOption={displayOption}
        data={data}
        groupingOption={groupingOption}
        sortingOption={sortingOption}
      />
    </div>
  );
}

export default App;
