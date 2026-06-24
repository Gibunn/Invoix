import { useLocation } from "react-router";

const pageByPath = [
	{ label: "Dashboard", path: "/dashboard" },
	{ label: "Invoice", path: "/dashboard/invoice" },
	{ label: "Klien", path: "/dashboard/client" },
	{ label: "Pengaturan", path: "/dashboard/settings" },
];

export function useGetPageNameByMenu() {
	const path = useLocation().pathname;

	const getPageName =
		pageByPath.filter((i) => i.path === path)[0]?.label ?? "";

	return {
		pageName: getPageName !== "" ? getPageName : "",
	};
}
