import team from "../assets/team.png";
import logo from "../assets/logo.webp";
export default function Jumbotron() {
  return (
    <>
      <div id="home"
        style={{ backgroundImage: `url(${team})` }}
        className="flex flex-col md:flex-row md:gap-10 md:justify-between w-screen h-screen bg-cover bg-center bg-no-repeat py-4 md:py-8 px-12 md:px-36"
      >
        <div className="h-max md:order-1 order-2 ">
          <h1 className="text-[50px] md:text-[100px] text-ijotua font-bold">
            Podocarpus <br /> Corner <br /> by MOIKAI
          </h1>
          <h1 className="text-white font-semibold mb-4">
            A place for academic healing
          </h1>
          <a className="mt-4 p-2 rounded-md bg-ijomuda text-white">
            Contact us
          </a>
        </div>
        <div className="order-1 md:order-2 flex h-max md:h-full md:items-center justify-center">
          <img src={logo} alt="" className="h-36 md:h-96" />
        </div>
      </div>
    </>
  );
}
