import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          width={1024}
          height={1024}
          src="/logo.png"
          alt="BogoSort Hotel"
          className="w-48 h-48"
        />
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">
            Bienvenido a BogoSort Hotel, Suerte tratando de encontrar su habitación
          </h1>
          <p className="text-stone-400 mt-5">
            Puedes iniciar sesion aquì{" "}
            <Link
            href="/protected"
            prefetch={false}
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Login
          </Link>{" "}
            o ver este video{" "}
            <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            prefetch={true}
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            NotSignIn
          </Link>{" "}
            o si quieres escuchar esta playlist{" "}
            <a
              href="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=8e9e9e9e9e9e9e9e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 underline hover:text-stone-200 transition-all"
            >
              Playlist
            </a>{" "}
            .
          </p>
        </div>
        <div className="flex space-x-3">
          
          <p className="text-white"></p>
          <a
            href="https://github.com/steven-tey/nextjs-typescript-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Japan
          </a>
          <p className="text-white"></p>
          <a
            href="https://initiald-portal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
          </a>
        </div>
      </div>
    </div>
  );
}
