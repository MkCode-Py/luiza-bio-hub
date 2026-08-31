import { LUCAS, LUIZA } from "@/lib/contacts";
import { WhatsAppIcon } from "./icons";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-ink/8 bg-background/85 p-1.5 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <a
          href={LUIZA.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-clay px-4 text-[0.95rem] font-semibold text-background active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
          Falar com Luíza
        </a>
        <a
          href={LUCAS.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com Lucas, personal trainer, no WhatsApp"
          className="flex min-h-12 items-center justify-center rounded-full px-4 text-[0.8rem] font-medium tracking-wide text-ink/70 active:scale-[0.98]"
        >
          Treino
        </a>
      </div>
    </div>
  );
}
