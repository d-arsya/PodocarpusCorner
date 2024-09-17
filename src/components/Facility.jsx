import bg from "../assets/team.png"
export default function Facility(){
    return (
        <>
            <section id="facility" className="w-full">
                <div className="w-full bg-abu py-24 px-24">
                <div className="flex flex-row justify-between">
                    <div className="w-5/12 flex flex-col gap-10 justify-between">
                        <img src={bg} alt="" />
                        <img src={bg} alt="" />
                    </div>
                    <div className="w-5/12 flex flex-col items-center justify-start">
                        <div className="w-max">
                            <h1 className="text-3xl font-bold text-white">Facilities</h1>
                            <div className="h-1 w-full rounded-full bg-ijotua"></div>
                        </div>
                        <p className="font-medium text-ijosedang">Podocarpus Corner by MOIKAI, bekerja sama dengan
Pusat Studi Pancasila**, menawarkan suasana tenang
dan nyaman di kawasan kampus UGM. Dengan
lingkungan yang bersih, fasilitas lengkap, banyak meja
dan kursi yang nyaman, serta lahan parkir yang luas,
tempat ini ideal untuk belajar, berdiskusi, dan
mendukung berbagai kegiatan mahasiswa.</p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}