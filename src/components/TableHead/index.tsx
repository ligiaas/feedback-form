import { FormContext } from 'contexts/FormContext';
import React, { useContext } from 'react';

const TableHead: React.FC = () => {
  const { form } = useContext(FormContext);
  const entries = Object.entries(form);

  return (
    <thead>
      <tr>
        {entries.map(([name]) => <th key={name}>{name}</th>)}
      </tr>
    </thead>
  );
}

export default TableHead;
