import { FormContext } from 'contexts/FormContext';
import React, { useContext } from 'react';

const TableBody: React.FC = () => {
  const { form } = useContext(FormContext);
  const entries = Object.entries(form);

  return (
    <tbody>
      <tr>
        {entries.map(([name, value]) => <td key={name}>{value}</td>)}
      </tr>
    </tbody>
  );
}

export default TableBody;
