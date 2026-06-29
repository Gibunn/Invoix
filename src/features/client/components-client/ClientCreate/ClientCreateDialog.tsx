import { Dialog } from "@/common/Dialog";
import { useClientDialogStore } from "../../store-client/useClientDialogStore";
import ClientCreateForm from "./ClientCreateForm";

export default function ClientCreateDialog() {
	const openCreate = useClientDialogStore((s) => s.openCreate);
	const setOpenCreate = useClientDialogStore((s) => s.setOpenCreate);

	return (
		<Dialog
			open={openCreate}
			onOpen={setOpenCreate}
			className="p-6 bg-white rounded-2xl"
		>
			<ClientCreateForm />
		</Dialog>
	);
}
