import RegisterForm from "../../../components/RegisterForm";

export default function RegisterPage() {
     return (
          <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
               <div className="w-full max-w-md space-y-6 p-8 bg-gray-900 rounded-2xl shadow-lg">
                    <h1 className="text-3xl font-bold text-center">Create Account</h1>
                    <RegisterForm />
               </div>
          </main>
     );
}
