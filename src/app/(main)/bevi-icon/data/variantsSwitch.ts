import type { SwitchData } from "@/components/Switch";

export const variantsSwitch: SwitchData[] = [
  {
    id: "solid",
    label: "Solid",
    value: "solid",
    iconName: "cube",
    iconVariant: "solid",
  },
  {
    id: "duo",
    label: "Duo",
    value: "duo",
    iconName: "cube",
    iconVariant: "duo",
  },
  {
    id: "dark",
    label: "Dark",
    value: "dark",
    iconName: "cube",
    iconVariant: "dark",
  },
  {
    id: "light",
    label: "Light",
    value: "light",
    iconName: "cube",
    iconVariant: "light",
  },
];

export const weightsSwitch: SwitchData[] = [
  {
    id: "regular",
    label: "Regular",
    value: 400,
    pos: "400",
  },
  {
    id: "bold",
    label: "Bold",
    value: 600,
    pos: "600",
  },
];
