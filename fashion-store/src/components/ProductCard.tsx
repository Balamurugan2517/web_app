export default function ProductCard() {
  return (
    <article className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(37,41,35,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(37,41,35,0.14)]">
      <div
        aria-label="Placeholder image for Classic Linen Shirt"
        className="relative aspect-[3/4] overflow-hidden bg-[#e8e5dc]"
        role="img"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#f4f1e9_0%,#e5e1d7_72%)]" />
        <svg
          aria-hidden="true"
          className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          fill="none"
          viewBox="0 0 400 520"
        >
          <ellipse cx="200" cy="450" fill="#d7d1c4" opacity=".6" rx="112" ry="16" />
          <path
            d="m157 111 43 22 43-22 55 43-31 53-16-11 7 224H142l7-224-16 11-31-53 55-43Z"
            fill="#d0bda3"
          />
          <path
            d="m157 111 43 22 43-22 19 15-29 50-33-21-33 21-29-50 19-15Z"
            fill="#e4d5c0"
          />
          <path
            d="m200 133 9 22-9 18-9-18 9-22Zm0 40v220m-52-164 52 16 52-16"
            stroke="#b5a188"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="m132 154 23 40-18 15-29-52 24-3Zm136 0-23 40 18 15 29-52-24-3Z"
            fill="#c6b397"
          />
          <path
            d="m146 391 108 0"
            stroke="#b5a188"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <circle cx="205" cy="216" r="2.5" fill="#a58f75" />
          <circle cx="205" cy="246" r="2.5" fill="#a58f75" />
          <circle cx="205" cy="276" r="2.5" fill="#a58f75" />
          <circle cx="205" cy="306" r="2.5" fill="#a58f75" />
          <circle cx="205" cy="336" r="2.5" fill="#a58f75" />
        </svg>
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-[#585c52]">
          NEW ARRIVAL
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-base font-medium tracking-[-0.01em] text-[#252923]">
              Classic Linen Shirt
            </h2>
            <p className="mt-1.5 text-sm text-[#77776f]">Natural · 100% linen</p>
          </div>
          <p className="shrink-0 text-sm font-medium text-[#252923]">$45.00</p>
        </div>

        <button
          className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#39463c] px-5 text-sm font-medium text-white transition duration-200 ease-out hover:bg-[#2e3931] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39463c] focus-visible:ring-offset-2 active:scale-[0.99]"
          type="button"
        >
          Add to Cart
          <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 20 20">
            <path
              d="M3 4h2l1.5 8.5h8.8L17 7H6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <circle cx="8" cy="15.5" r="1" fill="currentColor" />
            <circle cx="14" cy="15.5" r="1" fill="currentColor" />
          </svg>
        </button>
      </div>
    </article>
  );
}
