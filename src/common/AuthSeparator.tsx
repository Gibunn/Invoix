export default function AuthSeparator() {
	return (
		<div className="flex justify-start w-full items-center gap-3 mb-6">
			<div className="w-full h-px relative bg-zinc-950/8"></div>

			<div className="relative w-12">
				<div className="absolute -top-2 text-gray-500 text-xs font-normal">
					atau
				</div>
			</div>

			<div className="w-full h-px relative bg-zinc-950/8"></div>
		</div>
	);
}
