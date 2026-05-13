import { SiteShell } from '@/components/layout/SiteShell';
import { Contact } from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <SiteShell title="Contact" subtitle="Let’s talk about your next project." mainClassName="pt-16">
      <Contact variant="page" />
    </SiteShell>
  );
}
