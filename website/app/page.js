import Banner from "@/components/Banner";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import NoticeBoard from "@/components/NoticeBoard";
import PressRelease from "@/components/PressRelease";

export default function Home() {
  return (
    <div className="px-2 sm:px-8 md:px-12 xl:px-20 space-y-20 py-20">
      <Banner />
      <PressRelease />
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
        <NoticeBoard />
        <Events />
      </div>
      {/* <Gallery /> */}
    </div>
  );
}
