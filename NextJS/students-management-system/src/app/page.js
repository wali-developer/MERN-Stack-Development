import { LoginForm } from "./components/authentication";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-primary p-5 sm:p-0 flex justify-center items-center">
      <section className="w-[475px] rounded-[20px] bg-white p-5 sm:p-8">
        <h4 className="text-[22px] uppercase font-semibold text-black text-center">
          Sign in
        </h4>
        <p className="text-sm text-textgray mt-3 text-center">
          Enter your details to Login{" "}
        </p>
        <LoginForm />
      </section>
    </main>
  );
}
