import React from "react";
import SelectReact from "react-select";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Map<any, string>;
  selectedValue: any;
  onChange: (selectedValue: any) => void;
}

export function Select(p: Props) {
  const options: Option[] = [];

  p.options.forEach((v, k) => options.push({ value: k, label: v }));

  return (
    <SelectReact
      options={options}
      value={p.selectedValue}
      onChange={p.onChange}
    />
  );
}
