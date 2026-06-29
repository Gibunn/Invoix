export interface Client {
	id: string;
	fullname: string;
	email: string;
	phone_number: string;
	total_invoices: number;
	total_amount: number;
	total_paid: number;
	more?: string;
}
