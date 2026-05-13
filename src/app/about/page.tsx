import { About } from '@/components/sections/About';
import { SiteShell } from '@/components/layout/SiteShell';

export default function AboutPage() {
  return (
    <SiteShell title="About" subtitle="A quick snapshot of who I am and what I do." mainClassName="pt-16">
      <About variant="page" />
    </SiteShell>
  );
}
