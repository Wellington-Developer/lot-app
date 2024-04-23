import { ComponentProps } from "react";

type ISelectProps = ComponentProps<"select"> & {
  name: string;
  id: string;
  placeholder: string;
  arrayData?: {};
};

export function Select({ name, id, placeholder, arrayData }: ISelectProps) {
  return (
    <select name={name} id={id}>
      <option value="" disabled selected>
        {placeholder}
      </option>
    </select>
  );
}
