import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native paper';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http swapi.py4e.com/api/planets/1/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }; 

    fetchData(); 
  }, []); 

  const columns = [
    { field: 'name', label: 'Name' },
    { field: 'height', label: 'Height' },
    { field: 'mass', label: 'Mass' },
    { field: 'created', label: 'Created' },
  ];     
  
  return (
    <DataTable>
      <DataTable.Header>
        {columns.map(column => (
          <DataTable.Title key={column.field}>{column.label}</DataTable.Title>
        ))}
      </DataTable.Header>

      <DataTable.Row>
        {columns.map(column => (
          <DataTable.Cell key={column.field}>{data[column.field]}</DataTable.Cell>
        ))}
      </DataTable.Row>
    </DataTable>
  );
};

export default Table;
