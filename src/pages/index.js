import Dashboard from "@/components/Dashboard";
import { QuestProvider } from "@/contexts/QuestContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <QuestProvider>
        <Dashboard />
      </QuestProvider>
    </>
  );
}
