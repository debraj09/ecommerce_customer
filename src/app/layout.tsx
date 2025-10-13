import type { Metadata } from "next";
import { Jost, Quicksand,Schoolbell } from "next/font/google";
import { Providers } from "@/redux/provider";
import "./global.scss";

const body = Jost({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});

const jost_p = Jost({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});

const jost_ff = Jost({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-jost",
});

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});

const schoolbell = Schoolbell({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-schoolbell",
});

export const metadata: Metadata = {
  title: "ecommerce-Customer-UI",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${jost_p.variable} ${jost_ff.variable} ${quicksand.variable} ${schoolbell.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
