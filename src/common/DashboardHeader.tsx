import { useGetPageNameByMenu } from "@/hooks/useGetPageNameByMenu";

export default function DashboardHeader() {
	const { pageName } = useGetPageNameByMenu();

	return (
		<div className="px-5 flex justify-between bg-white items-center h-14 border-b-[0.74px] border-zinc-950/5 w-full">
			<h2 className="text-zinc-950 text-base font-semibold">{pageName}</h2>
		</div>
	);
}
