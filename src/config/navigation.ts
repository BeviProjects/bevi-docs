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

export const Homepage: NavigationType[] = [
	{
		id: "bevi-icon",
		label: "bevi-icon",
		href: routes.beviIcon,
	},
	{
		id: "bevi-logo",
		label: "bevi-logo",
		href: routes.beviLogo,
	},
];

export const Header: NavigationType[] = [
	{
		id: "bevi-icon",
		label: "bevi-icon",
		href: routes.beviIcon,
		children: [
			{
				id: "bi-overview",
				label: "Ícones",
				href: routes.beviIcon,
			},
			{
				id: "bi-getting-started",
				label: "O que é",
				href: routes.beviIconGettingStarted,
			},
			{
				id: "bi-installation",
				label: "Instalação",
				href: routes.beviIconInstallation,
			},
			{
				id: "bi-usage",
				label: "Como usar",
				href: routes.beviIconUsage,
			},
			{
				id: "bi-collections",
				label: "Coleções",
				href: routes.beviIconGettingStarted,
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
