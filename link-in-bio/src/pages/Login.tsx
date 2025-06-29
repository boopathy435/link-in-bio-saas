import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // 👈 Add this

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User logged in:', result.user);

      // ✅ Redirect to dashboard on success
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
