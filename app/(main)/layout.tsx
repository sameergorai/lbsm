// app/(main)/layout.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Header />
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  );
}