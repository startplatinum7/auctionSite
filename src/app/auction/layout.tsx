import type { Metadata } from "next";
import { Ruluko } from "next/font/google";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};
const ruluko = Ruluko({
  subsets: ["latin"],
  weight: "400",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body className={ruluko.className}>{children}</body>
    </>
  );
}
