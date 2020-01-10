import React from "react";

import { Field, Control, Select as SelectInput } from "./bulma";

interface ISelectProps
{
    value: string | undefined;    
    options: ISelectOption[];
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

interface ISelectOption
{
    id: string;
    name: string;
}

const Select: React.FC<ISelectProps> = ({ value, options, onChange }) => (
    <Field>
        <Control isExpanded>
            <SelectInput
                value={value}
                onChange={onChange}
                isFullWidth>
                {options.map(_ => <option key={_.id} value={_.id}>{_.name}</option>)}
            </SelectInput>
        </Control>
    </Field>
);

export default Select;