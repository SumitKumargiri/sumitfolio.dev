import { SiteShell } from '@/components/layout/SiteShell';
import { Projects } from '@/components/sections/Projects';

export default function ProjectsPage() {
  return (
    <SiteShell
      title="Projects"
      subtitle="Selected work and what I built."
      headerImageSrc="/headers/projects.svg"
      headerImageAlt="Projects page illustration"
    >
      <Projects variant="page" />
    </SiteShell>
  );
}
