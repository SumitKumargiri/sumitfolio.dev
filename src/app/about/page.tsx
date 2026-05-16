import { About } from '@/components/sections/About';
import { SiteShell } from '@/components/layout/SiteShell';

export default function AboutPage() {
  return (
    <SiteShell
      title="About"
      subtitle="A quick snapshot of who I am and what I do."
      headerImageSrc="/headers/about.svg"
      headerImageAlt="About page illustration"
    >
      <About variant="page" />
    </SiteShell>
  );
}
