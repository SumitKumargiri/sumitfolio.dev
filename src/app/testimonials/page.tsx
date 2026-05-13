import { SiteShell } from '@/components/layout/SiteShell';
import { Testimonials } from '@/components/sections/Testimonials';

export default function TestimonialsPage() {
  return (
    <SiteShell title="Testimonials" subtitle="What clients and teammates say." mainClassName="pt-16">
      <Testimonials variant="page" />
    </SiteShell>
  );
}
