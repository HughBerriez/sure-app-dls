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
        <div className="space-y-7">
          <div className="flex flex-row space-x-7">
            <HeroListing />
            <div className="hidden md:block">
              <BookingAside />
            </div>
          </div>
          <AdditionalOptions />
          <div className="block md:hidden">
            <BookingAside />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
