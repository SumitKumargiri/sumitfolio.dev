import { SiteShell } from '@/components/layout/SiteShell';
import { Services } from '@/components/sections/Services';

export default function ServicesPage() {
  return (
    <SiteShell
      title="Services"
      subtitle="How I can help your team ship faster."
      headerImageSrc="/headers/services.svg"
      headerImageAlt="Services page illustration"
    >
      <Services variant="page" />
    </SiteShell>
  );
}
