// components/Logo.tsx

import { Taviraj } from "next/font/google";

// Load the Taviraj font
const taviraj = Taviraj({ subsets: ["latin"], weight: ["400"] });

export default function Logo() {
  return (
    <div className={taviraj.className}>
      <p className="text-black text-3xl">erkhem</p>
    </div>
  );
}
