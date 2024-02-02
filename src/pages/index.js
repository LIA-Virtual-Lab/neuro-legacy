import Dashboard from "@/components/Dashboard";
import { Inter } from "next/font/google";
import { QuestProvider } from "@/contexts/QuestContext";
import { AnimationProvider } from "@/contexts/AnimationContext";
import { ButtonProvider } from "@/contexts/ButtonContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ButtonProvider>
        <AnimationProvider>
          <QuestProvider>
            <Dashboard />
          </QuestProvider>
        </AnimationProvider>
      </ButtonProvider>
    </>
  );
}
