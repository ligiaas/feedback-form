import React from 'react';
import TableBody from 'components/TableBody';
import TableHead from 'components/TableHead';
import './styles.css';

const Table: React.FC = () => (
  <div className="Table">
    <h3>Respostas</h3>
    <table>
      <TableHead />
      <TableBody />
    </table>
  </div>
)

export default Table;
