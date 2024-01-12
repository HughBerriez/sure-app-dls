import AdditionalOptions from "@/components/AdditionalOptions";
import BookingAside from "@/components/BookingAside";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroListing from "@/components/HeroListing";

export default function TrianglesPage() {
  return (
    <main className="flex flex-col h-screen justify-between">
      <Header />
      <div className="flex flex-col w-screen items-center px-8 py-7">
        <div className="flex flex-row space-x-4">
          <HeroListing />
          <BookingAside />
        </div>
        <AdditionalOptions />
      </div>
      <Footer />
    </main>
  );
}
