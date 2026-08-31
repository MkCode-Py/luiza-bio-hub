const buildWhatsAppLink = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const LUIZA = {
  name: "Luíza Carrozza",
  role: "Nutricionista",
  crn: "CRN 22102519",
  instagram: "@lucarrozza",
  instagramUrl: "https://instagram.com/lucarrozza",
  whatsappDisplay: "+55 22 99264-9087",
  whatsappUrl: buildWhatsAppLink(
    "5522992649087",
    "Olá, Luíza! Vim pelo seu Instagram e gostaria de saber mais sobre o acompanhamento.",
  ),
} as const;

export const LUCAS = {
  name: "Lucas Vitipo",
  role: "Personal Trainer",
  instagram: "@lucasvtreinador",
  instagramUrl: "https://instagram.com/lucasvtreinador",
  whatsappDisplay: "+55 22 99946-0253",
  whatsappUrl: buildWhatsAppLink(
    "5522999460253",
    "Olá, Lucas! Vim pelo perfil da Luíza e gostaria de saber mais sobre o treinamento.",
  ),
} as const;

export const AREAS = [
  "Nutrição Clínica",
  "Nutrição Esportiva",
  "Saúde da Mulher",
  "Diabetes",
  "Problemas Metabólicos",
] as const;
