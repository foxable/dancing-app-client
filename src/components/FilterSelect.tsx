import { FormControl, Select, SelectProps } from '@material-ui/core';
import React from 'react';

interface IFilterSelectProps extends SelectProps {
  options: IFilterSelectOption[];
}

interface IFilterSelectOption {
  id: string;
  name: string;
}

const FilterSelect: React.FC<IFilterSelectProps> = ({ options, ...rest }) => (
  <FormControl variant="outlined">
    <Select {...rest} native>
      {options.map(_ => (
        <option key={_.id} value={_.id}>
          {_.name}
        </option>
      ))}
    </Select>
  </FormControl>
);

export default FilterSelect;
