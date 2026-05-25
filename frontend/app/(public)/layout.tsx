import { Navbar } from '@/src/shared/components/Navbar';
import { Footer } from '@/src/shared/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
