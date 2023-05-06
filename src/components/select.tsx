import React from "react";
import SelectReact from "react-select";

export interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
}

export function Select(p: Props) {
  const onChange = (option: Option | null) => {
    if (option) {
      p.onChange(option.value);
    }
  };

  return (
    <SelectReact
      className="w-full"
      instanceId={"selectbox"}
      options={p.options}
      value={p.options.find((option) => option.value === p.selectedValue)}
      onChange={onChange}
    />
  );
}
