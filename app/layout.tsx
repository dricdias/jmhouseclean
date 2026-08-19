import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeane Matos House Clean | Limpeza residencial com cuidado pessoal",
  description: "Limpeza residencial cuidadosa com a Jeane Matos House Clean, em Sarasota, FL.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
