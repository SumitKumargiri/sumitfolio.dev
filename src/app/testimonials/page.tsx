import { SiteShell } from '@/components/layout/SiteShell';
import { Testimonials } from '@/components/sections/Testimonials';

export default function TestimonialsPage() {
  return (
    <SiteShell
      title="Testimonials"
      subtitle="What clients and teammates say."
      headerImageSrc="/headers/testimonials.svg"
      headerImageAlt="Testimonials page illustration"
    >
      <Testimonials variant="page" />
    </SiteShell>
  );
}
