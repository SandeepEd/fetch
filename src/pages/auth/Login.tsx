import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';

export default function AuthenticatedApp() {
  const { register, handleSubmit } = useForm<Login.credentials>();
  const { logIn } = useAuth();
  const onSubmit = (data: Login.credentials) => {
    logIn(data);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label htmlFor="name" className="block mb-1 text-sm text-left">Name</label>
              <input
                {...register(`name`, { required: true })}
                id="name"
                name="name"
                type="name"
                required
                className="appearance-none relative block w-full px-3 py-2 border
                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Please enter your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-left mt-1">Email</label>
              <input
                {...register(`email`, { required: true })}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Please enter your Email address"
              />
            </div>

          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4
              border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600
              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
