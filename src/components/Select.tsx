import { FormControl, Select as SelectControl, SelectProps } from '@material-ui/core';
import React from 'react';

interface ISelectProps extends SelectProps {
  options: ISelectOption[];
}

interface ISelectOption {
  id: string;
  name: string;
}

const Select: React.FC<ISelectProps> = ({ options, ...rest }) => (
  <FormControl variant="outlined">
    <SelectControl {...rest}>
      {options.map(_ => (
        <option key={_.id} value={_.id}>
          {_.name}
        </option>
      ))}
    </SelectControl>
  </FormControl>
);

export default Select;
