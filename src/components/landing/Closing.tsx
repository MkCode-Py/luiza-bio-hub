import { LUIZA } from "@/lib/contacts";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Closing() {
  return (
    <footer className="relative px-6 pt-16 pb-36 sm:px-10 lg:px-16 lg:pt-24 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 -top-10 mx-auto h-64 max-w-3xl rounded-[50%] bg-clay/8 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="reveal font-display text-[clamp(2.1rem,8vw,4rem)] leading-[1.02] text-ink">
          Seu acompanhamento começa com uma conversa.
        </h2>

        <div className="reveal mt-10">
          <a
            href={LUIZA.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="cta-clay w-full text-[1.05rem] sm:w-auto sm:px-10"
          >
            <WhatsAppIcon />
            Falar com Luíza no WhatsApp
          </a>
        </div>

        <div className="reveal mt-12 flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <a
            href={LUIZA.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-ink transition-colors hover:text-clay"
          >
            <InstagramIcon />
            {LUIZA.instagram}
          </a>
          <p>{LUIZA.crn}</p>
          <p>Rio das Ostras — RJ</p>
          <p>Atendimento presencial e online</p>
        </div>
      </div>
    </footer>
  );
}
