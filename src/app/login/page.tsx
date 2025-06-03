// ✅ src/app/login/page.tsx
import Image from "next/image";
import Link from "next/link";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b2a3a]">
      <div className="flex w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Левая часть — изображение */}
        <div className="w-1/2 hidden md:block">
          <Image
            src="/minecraft-airbnb.jpg"
            alt="Login Banner"
            width={600}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Правая часть — форма */}
        <div className="w-full md:w-1/2 p-10">
          <Image
            src="/login-title.png"
            alt="Login Title"
            width={250}
            height={80}
            className="mx-auto mb-4"
          />

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-[#002c45] text-white py-3 rounded font-semibold hover:bg-[#024563]"
            >
              Войти
            </button>
          </form>

          <p className="text-center text-sm text-blue-600 mt-4">
            Нет аккаунта? <Link href="/register">Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </div>
  );
}




