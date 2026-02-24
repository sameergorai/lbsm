// app/(main)/layout.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "LBSM COLLEGE JAMSHEDPUR",
  description: "Stay updated with latest headlines",
  // icons: {
  //   icon: "/favicon.ico",
  // },
  
}
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <Header />
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  );
}