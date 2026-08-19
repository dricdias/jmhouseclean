import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeane Matos House Clean | Thoughtful residential cleaning",
  description: "A cleaner home and a lighter everyday with Jeane Matos House Clean.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
