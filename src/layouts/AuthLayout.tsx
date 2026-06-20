import { Outlet } from "react-router";
import AuthLeftSidePanel from "../common/AuthLeftSidePanel";

export default function AuthLayout() {
	return (
		<div className="flex">
			<AuthLeftSidePanel />
			<Outlet />
		</div>
	);
}
