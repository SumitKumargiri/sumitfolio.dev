import { SiteShell } from '@/components/layout/SiteShell';
import { Projects } from '@/components/sections/Projects';

export default function ProjectsPage() {
  return (
    <SiteShell title="Projects" subtitle="Selected work and what I built." mainClassName="pt-16">
      <Projects variant="page" />
    </SiteShell>
  );
}
