import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import KanbanBoard from './components/KanbanBoard';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ tickets: [], users: [] });

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Load the saved options from localStorage on initial load
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

  const [displayOption, setDisplayOption] = useState('');
  const [groupingOption, setGroupingOption] = useState('');
  const [sortingOption, setSortingOption] = useState('');

  // Save the selected options to localStorage whenever they change
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