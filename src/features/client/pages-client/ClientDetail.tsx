import ClientDetailHeader from "../components-client/ClientDetail/ClientDetailHeader";
import ClientDetailInformation from "../components-client/ClientDetail/ClientDetailInformation";

export default function ClientDetail() {
	return (
		<div className="py-6 pl-6 pr-13.75">
			<ClientDetailHeader />
			<div className="flex">
				<ClientDetailInformation />
			</div>
		</div>
	);
}
