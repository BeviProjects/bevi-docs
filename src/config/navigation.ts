import { site } from "@config/site";

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
    id: 'bevi-icons',
    label: 'bevi-icons',
    href: 'bevi-icons',
    children: [
      {
        id: 'bi-overview',
        label: 'Overview',
        href: 'bevi-icons'
      },
      {
        id: 'bi-installation',
        label: 'Installation',
        href: 'bevi-icons'
      },
    ]
  },
  {
    id: 'bevi-logos',
    label: 'bevi-logos',
    href: 'bevi-logos',
    children: [
      {
        id: 'bl-overview',
        label: 'Overview',
        href: 'bevi-icons'
      },
      {
        id: 'bl-installation',
        label: 'Installation',
        href: 'bevi-icons'
      },
    ]
  },
]
