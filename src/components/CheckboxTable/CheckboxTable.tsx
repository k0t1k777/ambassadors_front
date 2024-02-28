import React, { useState } from "react";

const CheckboxTable: React.FC = () => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsCheckedAll(isChecked);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Checkbox</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="checkbox"
              checked={isCheckedAll}
              onChange={handleCheckAll}
            />
            <label htmlFor="checkAll">Select All</label>
          </td>
          <td>
            <input
              type="checkbox"
              checked={isCheckedAll}
              onChange={() => setIsCheckedAll(!isCheckedAll)}
            />
            <label htmlFor="check1">Checkbox 1</label>
          </td>
          <td>Cell 1</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input
              type="checkbox"
              checked={isCheckedAll}
              onChange={() => setIsCheckedAll(!isCheckedAll)}
            />
            <label htmlFor="check2">Checkbox 2</label>
          </td>
          <td>Cell 2</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input
              type="checkbox"
              checked={isCheckedAll}
              onChange={() => setIsCheckedAll(!isCheckedAll)}
            />
            <label htmlFor="check3">Checkbox 3</label>
          </td>
          <td>Cell 3</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CheckboxTable;