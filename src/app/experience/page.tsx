import { SiteShell } from '@/components/layout/SiteShell';
import { Experience } from '@/components/sections/Experience';

export default function ExperiencePage() {
  return (
    <SiteShell title="Experience" subtitle="Roles, responsibilities, and impact." mainClassName="pt-16">
      <Experience variant="page" />
    </SiteShell>
  );
}
