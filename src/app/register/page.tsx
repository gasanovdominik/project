// ✅ src/app/register/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b2a3a]">
      <div className="flex w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Левая часть — изображение */}
        <div className="w-1/2 hidden md:block">
          <Image
            src="/minecraft-airbnb.jpg"
            alt="Register Banner"
            width={600}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Правая часть — форма */}
        <div className="w-full md:w-1/2 p-10">
          <Image
            src="/register-title.png"
            alt="Register Title"
            width={250}
            height={80}
            className="mx-auto mb-4"
          />

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
            />
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
              className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700"
            >
              Зарегистрироваться
            </button>
          </form>

          <p className="text-center text-sm text-blue-600 mt-4">
            Уже есть аккаунт? <Link href="/login">Войти</Link>
          </p>
        </div>
      </div>
    </div>
  );
}





