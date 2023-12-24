import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ExcelGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); 
  grid-gap: 1px;
`;

const ExcelCell = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: ${({ selected }) => (selected ? '#3498db' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  cursor: pointer;
`;

const ExcelGrid = () => {
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });

  const handleKeyDown = (e) => {
    const { key } = e;
    let newRow = selectedCell.row;
    let newCol = selectedCell.col;

    switch (key) {
      case 'ArrowUp':
        newRow = Math.max(0, newRow - 1);
        break;
      case 'ArrowDown':
        newRow = Math.min(5, newRow + 1);
        break;
      case 'ArrowLeft':
        newCol = Math.max(0, newCol - 1);
        break;
      case 'ArrowRight':
        newCol = Math.min(6, newCol + 1);
        break;
      default:
        return;
    }

    setSelectedCell({ row: newRow, col: newCol });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell]);

  const renderGrid = () => {
    const grid = [];

    for (let row = 0; row < 6; row++) {
      const week = [];
      for (let col = 0; col < 7; col++) {
        const isSelected = row === selectedCell.row && col === selectedCell.col;
        week.push(
          <ExcelCell key={`${row}-${col}`} selected={isSelected}>
            {`${row + 1}-${col + 1}`}
          </ExcelCell>
        );
      }
      grid.push(week);
    }

    return grid;
  };

  return <ExcelGridContainer>{renderGrid()}</ExcelGridContainer>;
};

export default ExcelGrid;
