import { useLocation } from "react-router";

const pageByPath = [
	{ label: "Dashboard", path: "/dashboard" },
	{ label: "Invoice", path: "/dashboard/invoice" },
	{ label: "Klien", path: "/dashboard/client" },
	{ label: "Pengaturan", path: "/dashboard/settings" },
	{ label: "Detail Klien", path: "/dashboard/client/:id" },
];

export function useGetPageNameByMenu() {
	const path = useLocation().pathname;

	const getPageName =
		pageByPath.filter((i) => {
			if (!i.path.includes(":id")) return i.path === path;
			return i.path;
		})[0]?.label ?? "";

	return {
		pageName: getPageName !== "" ? getPageName : "",
	};
}
