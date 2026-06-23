import AuthSeparator from "@/common/AuthSeparator";
import SignInFooter from "../components-sign-in/SignInFooter";
import SignInForm from "../components-sign-in/SignInForm";
import SignInGoogle from "../components-sign-in/SignInGoogle";
import SignInHeader from "../components-sign-in/SignInHeader";

export default function SignIn() {
	return (
		<div className="w-[36%] p-12 bg-white flex flex-col items-center justify-center h-screen font-['Plus_Jakarta_Sans']">
			<SignInHeader />
			<SignInForm />

			<AuthSeparator />

			<SignInGoogle />
			<SignInFooter />
		</div>
	);
}
