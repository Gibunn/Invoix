import AuthFormLayout from "@/common/AuthFormLayout";
import ForgotPasswordFooter from "../components-forgot-password/ForgotPasswordFooter";
import ForgotPasswordForm from "../components-forgot-password/ForgotPasswordForm";
import ForgotPasswordHeader from "../components-forgot-password/ForgotPasswordHeader";

export default function ForgotPassword() {
	return (
		<AuthFormLayout>
			<ForgotPasswordHeader />
			<ForgotPasswordForm />
			<ForgotPasswordFooter />
		</AuthFormLayout>
	);
}
