import { TabGroup, TabList, TabPanel } from "@headlessui/react";
import { TabItem } from "../../../common/TabItem";

export default function Settings() {
	return (
		<TabGroup className="p-5">
			<TabList className="flex gap-1 bg-white w-fit p-1 rounded-xl">
				<TabItem>Profil Bisnis</TabItem>
				<TabItem>Info Pembayaran</TabItem>
				<TabItem>Preferensi Invoice</TabItem>
				<TabItem>Notifikasi</TabItem>
				<TabItem>Akun</TabItem>
			</TabList>

			<TabPanel></TabPanel>
		</TabGroup>
	);
}
