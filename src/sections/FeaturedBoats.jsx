import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import BootCard from "../components/BootCard";

const FeaturedBoats = () => {
    const [boats, setBoats] = useState([]);
    useEffect(() => {
        fetch('/boats.json')
            .then(res => res.json())
            .then(data => setBoats(data))
    }, [])

    return (
        <section className="py-12 bg-[#F0F6FB]">
            <div className="container">
                <SectionTitle title='Featured Boats to work in' />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
                    {
                        boats.length > 0 ? boats.map(boat => <BootCard
                            key={boat._id}
                            boat={boat}
                        />) : <h1>Loading ...</h1>
                    }
                </div>

                <div className="text-center mt-10">
                    <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">View more</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBoats;