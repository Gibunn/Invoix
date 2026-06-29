import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/common/Container";
import ProfileImage from "@/common/ProfileImage";

export default function ClientDetailInformation() {
	return (
		<Container className="p-6 flex gap-4 w-[57%]">
			<ProfileImage
				name="M Gibran"
				className="bg-[#EDE9FE] text-[#7008E7] size-12 font-semibold text-base"
			/>
			<div className="w-full">
				<div className="mb-3">
					<h2 className="mb-2 text-lg font-bold">PT XYZ</h2>

					<div className="flex flex-col gap-1.5">
						<p className="text-[#6B6B80] text-sm flex gap-2 items-center">
							<Mail size={14} color="#6B6B80" /> finance@xyz.com
						</p>
						<p className="text-[#6B6B80] text-sm flex gap-2 items-center">
							<Phone size={14} color="#6B6B80" /> 021-5551234
						</p>
						<p className="text-[#6B6B80] text-sm flex gap-2 items-center">
							<MapPin size={14} color="#6B6B80" /> Jl. Jend. Sudirman
							Kav. 45, Jakarta Pusat 10270
						</p>
					</div>
				</div>

				<div className="bg-[#FFFBEB] py-2.5 px-3 rounded-xl">
					<p className="text-[#BB4D00] font-semibold text-xs">
						CATATAN INTERNAL
					</p>
					<p className="text-[#7B3306] text-sm">
						Blablablablablablablablablabla.
					</p>
				</div>
			</div>
		</Container>
	);
}
