import { useGetPageNameByMenu } from "@/hooks/useGetPageNameByMenu";
import DashboardHeaderNameAction from "./DashboardHeaderNameAction";
import DashboardHeaderNotif from "./DashboardHeaderNotif";
import ProfileImage from "./ProfileImage";

export default function DashboardHeader() {
	const { pageName } = useGetPageNameByMenu();

	return (
		<div className="px-5 flex justify-between bg-white items-center h-14 border-b-[0.74px] border-zinc-950/5 w-full">
			<h2 className="text-zinc-950 text-base font-semibold">{pageName}</h2>
			<div className="flex">
				<DashboardHeaderNotif />
				<ProfileImage name="M Gibran" className="mr-2" />
				<DashboardHeaderNameAction name="M Gibran" />
			</div>
		</div>
	);
}
