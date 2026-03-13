import { useState } from "react";
import { BvIcon, type BvIconName, type BvIconVariants } from "bevi-icon";

type IconVariant = BvIconVariants["variant"][number];

export type SwitchData = {
  id: string;
  label: string;
  iconName?: BvIconName;
  iconVariant?: IconVariant;
  value: string | number;
};

type SwitchProps<T extends SwitchData, R = T> = {
  data: T[];
  defaultValue: T["value"];
  onChange?: (selected: R) => void;
  onChangeTransform?: (item: T) => R;
};

export const Switch = <T extends SwitchData, R = T>({
  data,
  defaultValue,
  onChange,
  onChangeTransform,
}: SwitchProps<T, R>) => {
  const [selectedValue, setSelectedValue] = useState<T["value"]>(
    defaultValue ?? data[0].value
  );

  const handleSelect = (item: T) => {
    setSelectedValue(item.value);
    if (onChange) {
      const result = onChangeTransform ? onChangeTransform(item) : (item as unknown as R);
      onChange(result);
    }
  };

  return (
    <div role="group" className="w-fit flex flex-row gap-2xs p-4xs inset-ring-1 inset-ring-gray-75 rounded-sm bg-white">
      {data.map((item) => {
        const isSelected = selectedValue === item.value;

        return (
          <button
            key={item.id}
            id={item.id}
            role="radio"
            aria-checked={isSelected}
            onClick={() => handleSelect(item)}
            type="button"
            className={`
              flex-center flex-row gap-4xs px-2xs py-2xs
              font-semibold leading-none
              inset-ring-1 rounded-2xs
              leading-none
              cursor-pointer
              ${isSelected ? "text-violet-20 inset-ring-violet-20" : "text-gray-55 inset-ring-transparent hover:inset-ring-violet-90"}`}
          >
            {item.iconName && (
              <BvIcon
                name={item.iconName}
                variant={item.iconVariant || "solid"}
                width={16}
              />
            )}
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
