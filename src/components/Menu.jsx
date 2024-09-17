import foods from "../assets/foods.jpg"
import beverages from "../assets/beverages.jpg"
export default function Menu(){
    return (
        <>
            <section id="menu" className="w-full bg-ijomuda px-24 py-8 md:py-24">
                <div className="w-max m-auto block">
                <h1 className="font-bold text-3xl text-white">Our Menus</h1>
                <div className="h-1 bg-abu w-full rounded-full mt-2"></div>

                </div>
                <div className="flex flex-col md:flex-row justify-center md:gap-48 mt-6">
                <div>
                    <h1 className="text-center font-semibold text-xl text-ijosedang my-2">Foods</h1>
                    <img src={foods} alt="" />
                </div>
                <div className="mt-12">
                    <img src={beverages} alt="" />
                    <h1 className="text-center font-semibold text-xl text-ijosedang my-2">Beverages</h1>
                </div>
                </div>
            </section>
        </>
    )
}