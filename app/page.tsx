import HeaderMain from "@/components/nav-bar/header";

export default function Home() {
  return (
    <div>
      <HeaderMain />
      <main className="flex flex-col gap-10 items-start"></main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
