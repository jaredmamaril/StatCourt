import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-white">
      <header className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-4">
          <Image
            src="/capy1.png"
            alt="temp"
            width={60}
            height={60}
            className="rounded-md"
          />
          <span className="text-xl font-bold bg-black">StatCourt</span>
        </div>
      </header>
    </main>
  );
}
