import { AREAS } from "@/lib/contacts";

export function Areas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-title"
      className="relative px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <h2 id="areas-title" className="font-display text-[clamp(2rem,7vw,3.5rem)] leading-none">
            Áreas de atuação
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Cinco frentes de cuidado, conduzidas com a mesma profundidade.
          </p>
        </div>

        <ul className="mt-12 lg:mt-16">
          {AREAS.map((area, index) => (
            <li
              key={area}
              className="reveal group border-t border-ink/12 last:border-b"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="flex items-baseline gap-4 py-6 transition-[padding,color] duration-500 group-hover:pl-3 sm:gap-8 sm:py-8">
                <span className="w-8 shrink-0 text-[0.7rem] tracking-[0.2em] text-clay tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display min-w-0 flex-1 text-[clamp(1.75rem,7.5vw,3.25rem)] leading-[1.02] text-ink transition-colors duration-500 group-hover:text-clay">
                  {area}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden h-2 w-2 shrink-0 rounded-full bg-clay/30 transition-all duration-500 group-hover:scale-150 group-hover:bg-clay sm:block"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
