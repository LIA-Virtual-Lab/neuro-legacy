import Dashboard from "@/components/Dashboard";
import { Inter } from "next/font/google";
import { QuestProvider } from "@/contexts/QuestContext";
import { AnimationProvider } from "@/contexts/AnimationContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AnimationProvider>
        <QuestProvider>
          <Dashboard />
        </QuestProvider>
      </AnimationProvider>
    </>
  );
}
