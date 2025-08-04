// components/Auth.tsx
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";

export default function Auth() {
  const handleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 shadow-xl rounded-xl">
      <Button onClick={handleLogin}>
        <span className="text-[var(--white-color)] flex items-center gap-2">
          <FcGoogle size={20} />
          Tiếp tục với Google
        </span>
      </Button>
    </div>
  );
}
