import Dashboard from "@/components/Dashboard";
import { Inter } from "next/font/google";
import { QuestProvider } from "@/contexts/QuestContext";
import { AnimationProvider } from "@/contexts/AnimationContext";
import { ScrollProvider } from "@/contexts/ScrollContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AnimationProvider>
        <ScrollProvider>
          <QuestProvider>
            <Dashboard />
          </QuestProvider>
        </ScrollProvider>
      </AnimationProvider>
    </>
  );
}
