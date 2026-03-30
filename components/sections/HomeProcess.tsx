import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProcessSteps } from "@/components/sections/ProcessSteps";

const steps = [
  { title: "Désignation par le juge" },
  { title: "Analyse du dossier" },
  { title: "Investigations terrain" },
  { title: "Rapport motivé" },
];

export function HomeProcess() {
  return (
    <SectionWrapper className="bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ProcessSteps
          title="Le processus en expertise judiciaire"
          steps={steps}
        />
      </div>
    </SectionWrapper>
  );
}
