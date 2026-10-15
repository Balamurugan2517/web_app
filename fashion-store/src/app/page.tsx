import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] px-5 py-8 text-[#252923] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-[#dedbd2] pb-5">
          <a
            aria-label="Forma home"
            className="text-sm font-semibold tracking-[0.24em]"
            href="#"
          >
            FORMA
          </a>
          <p className="text-xs tracking-[0.12em] text-[#77776f] sm:text-sm">
            EVERYDAY, CONSIDERED
          </p>
        </header>

        <section className="mx-auto grid max-w-4xl items-center gap-10 py-12 sm:py-16 md:grid-cols-[1fr_0.8fr] md:gap-16">
          <div className="max-w-md">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#74786d]">
              THE WARDROBE EDIT
            </p>
            <h1 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Thoughtful pieces,
              <br />
              made to be worn.
            </h1>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#6f706a]">
              Natural textures and timeless shapes for wherever the day takes
              you.
            </p>
          </div>

          <ProductCard />
        </section>
      </div>
    </main>
  );
}
