import { SiteShell } from '@/components/layout/SiteShell';
import { Experience } from '@/components/sections/Experience';

export default function ExperiencePage() {
  return (
    <SiteShell
      title="Experience"
      subtitle="Roles, responsibilities, and impact."
      headerImageSrc="/headers/experience.svg"
      headerImageAlt="Experience page illustration"
    >
      <Experience variant="page" />
    </SiteShell>
  );
}
