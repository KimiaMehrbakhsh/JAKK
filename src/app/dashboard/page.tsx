import Home from "@/components/Home";
import Record from "@/components/RecordPlayer";

export default function dashboard() {
  return (
    <main className="grid h-screen w-screen grid-cols-[30%,1fr] gap-4 p-8">
      <section className="h-full rounded-3xl border border-slate-200 bg-white p-8 text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 lg:px-8">
        <Record radiusPercentage={50} />
      </section>
      <section className="h-full overflow-x-auto rounded-3xl border border-slate-200 bg-white p-8 text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 lg:px-8">
        <Home />
      </section>
    </main>
  );
}
