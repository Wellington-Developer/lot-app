import { ComponentProps } from "react";

type IInputProps = ComponentProps<"input"> & {
  label?: string;
  id: string;
};

export function Input({ label, id, ...props }: IInputProps) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
    </div>
  );
}
