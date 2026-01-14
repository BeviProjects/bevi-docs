import { site } from "@config/site";
import { routes } from "@config/routes";

export type NavigationType = {
  id: string;
  label: string;
  href: string;
  description?: string;
  iconName?: string;
  external?: boolean;
  disabled?: boolean;
  badge?: string;
  children?: NavigationType[];
};

export const Header: NavigationType[] = [
  {
    id: "bevi-icon",
    label: "bevi-icon",
    href: routes.beviIcon,
    children: [
      {
        id: "bi-overview",
        label: "Overview",
        href: routes.beviIcon,
      },
      {
        id: "bi-installation",
        label: "Installation",
        href: routes.beviIconInstallation,
      },
    ],
  },
  {
    id: "bevi-logo",
    label: "bevi-logo",
    href: routes.beviLogo,
    children: [
      {
        id: "bl-overview",
        label: "Overview",
        href: routes.beviLogo,
      },
      {
        id: "bl-installation",
        label: "Installation",
        href: routes.beviLogoInstallation,
      },
    ],
  },
];
