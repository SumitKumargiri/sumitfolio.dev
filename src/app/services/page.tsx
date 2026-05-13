import { SiteShell } from '@/components/layout/SiteShell';
import { Services } from '@/components/sections/Services';

export default function ServicesPage() {
  return (
    <SiteShell title="Services" subtitle="How I can help your team ship faster." mainClassName="pt-16">
      <Services variant="page" />
    </SiteShell>
  );
}
