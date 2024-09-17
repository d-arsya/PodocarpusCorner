import team from "../assets/team.png";
import kotak from "../assets/kotak.jpg";
export default function Team() {
  return (
    <>
      <section id="team" className="bg-abu w-full md:p-24 p-12 flex md:flex-row flex-col justify-center gap-12 md:gap-36">
        <img className="rounded-md w-full md:w-5/12 md:order-1 order-2" src={team} alt="" />
        <div className="w-full md:w-7/12 flex flex-col order-1 md:order-2">
          <div className="w-max float-end">
            <h1 className="font-bold text-3xl text-white">Our Team</h1>
            <div className="w-full h-1 rounded-full mt-2 bg-ijotua"></div>
          </div>
          <div className="flex flex-row justify-between mt-12 gap-12">
            <div>
                <img className="rounded-full border border-8 border-white w-48" src={kotak} alt="" />
                <h1 className="text-center text-white font-semibold text-xl mt-3">Ika Kurniati</h1>
                <h1 className="text-center font-medium text-ijotua">Owner</h1>
            </div>
            <div>
                <img className="rounded-full border border-8 border-white w-48" src={kotak} alt="" />
                <h1 className="text-center text-white font-semibold text-xl mt-3">Markus Johan</h1>
                <h1 className="text-center font-medium text-ijotua">Store Manager</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
