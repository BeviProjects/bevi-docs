import { useState } from "react";
import type { BvIconRegistry } from "bevi-icon";

export type SwitchData = {
  id: string;
  label: string;
  icon?: BvIconRegistry;
  value: string | boolean;
};

type SwitchProps = {
  data: SwitchData[];
  defaultValue: string | boolean;
  onChange?: (selected: SwitchData) => void;
};

export const Switch = ({ data, defaultValue, onChange }: SwitchProps) => {
  const [selectedValue, setSelectedValue] = useState<string | boolean>(
    defaultValue ?? data[0].value
  );

  const handleSelect = (item: SwitchData) => {
    setSelectedValue(item.value);
    onChange?.(item);
  };

  return (
    <div role="group" className="">
      {data.map((item) => {
        const isSelected = selectedValue === item.value;

        return (
          <button
            key={item.id}
            id={item.id}
            role="radio"
            aria-checked={isSelected}
            onClick={() => handleSelect(item)}
            className={isSelected ? "font-bold" : ""}
            type="button"
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
