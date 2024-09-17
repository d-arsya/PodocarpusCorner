import bg from "../assets/team.png";
import logo from "../assets/logo.webp";
export default function About() {
  return (
    <>
      <main id="about">
        <div className="w-full bg-white px-12 md:px-24 md:py-24 py-12 flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-5/12">
            <div className="w-max">
              <h1 className="font-bold text-abu text-3xl">About Us</h1>
              <div className="h-1 w-full rounded-full bg-ijomuda"></div>
            </div>
            <p className="mt-3 font-medium text-md">
              Podocarpus Corner merupakan kolaborasi antara Pusat Studi
              Pancasila (PSP) dan MOIKAI Coffee. Kerjasama ini berawal dari
              dukungan MOIKAI Coffee sebagai sponsor minuman pada berbagai acara
              di PSP. Mengingat kesesuaian konsep dan target pasar, PSP menawarkan
              kemitraan yang akhirnya melahirkan Podocarpus Corner sebagai
              bagian dari MOIKAI Coffee di lingkungan PSP
            </p>
          </div>
          <img className="w-full md:w-5/12 mt-5 md:mt-5" src={bg} alt="" />
        </div>
        <div className="w-full bg-white px-12 md:px-24 pb-24 flex flex-col md:flex-row justify-between">
          <div className="bg-abu py-16 rounded-[30%] md:absolute">
            <img className="" src={logo} alt="" />
          </div>
          <div className="w-full md:w-5/12"></div>
          <div className="w-full md:w-5/12 order-2">
            <p className="font-medium text-md text-center md:text-end mt-5 md:mt-0">
              Podocarpus merupakan nama daun dan nama jalan dimana cafe ini
              berada. Daun hijau dibagian bawah menggambarkan tanaman 
              <i> podocarpus</i>. Huruf “PC” yang berada di Tengah logo merupakan
              inisial dari Podocarpus Corner. Warna hijau dipilih untuk
              menggambarkan Podocarpus yang universal dan dapat terus mengikuti
              perkembangan jaman
            </p>
          </div>
        </div>
        <div className="w-full bg-item pt-12 md:pt-96 pb-24 px-12 md:px-24 flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
          <div className="w-full md:w-5/12">
            <div className="w-max">
              <h1 className="font-bold text-white text-3xl">Visi</h1>
              <div className="mt-2 w-full bg-ijotua rounded-full h-1"></div>
            </div>
            <p className="bg-ijosedang p-2 text-white font-medium text-md mt-3">
              Menjadi “The hub of inspiration” dalam dunia kopi, menciptakan
              lingkungan yang mendukung kolaborasi dan inovasi bagi civitas
              akademika dan bertumbuh bersama
            </p>
          </div>
          <div className="w-full md:w-5/12">
            <div className="w-max">
              <h1 className="font-bold text-white text-3xl">Misi</h1>
              <div className="mt-2 w-full bg-ijotua rounded-full h-1"></div>
            </div>
            <div className="bg-ijosedang py-3 pl-8 pr-3 md:pr-2 text-white font-medium text-md mt-3 ">
              <ul className="list-decimal">
                <li>
                  Penyediaan layanan yang berorientasi pada kepuasan konsumen
                </li>
                <li>
                  Menyajikan kopi dan makanan berkualitas dengan harga yang
                  terjangkau
                </li>
                <li>
                  Menyediakan ruang kolaborasi yang ramah, tempat para akademisi
                  bertemu, dan mengadakan pertemuan atau diskusi yang memperkaya
                  pemikiran dan gagasan baru
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
