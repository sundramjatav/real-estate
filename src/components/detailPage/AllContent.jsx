import React from "react";
import PopupForm from "./PopupForm";
import map from '../../assets1/AllContent/overview/map.png'

// Overview Component
const Overview = () => {
    return <div className="w-full h-fit">
        <div>
            <h1 className="text-5xl font-semibold pb-10 border-b">Overview</h1>
            <div className="w-full h-fit mt-5 flex flex-col gap-10 md:flex-row">
                <div className="md:w-2/3 grid grid-cols-3 gap-5 h-full text-2xl">
                    <div className="w-full h-32 flex items-center justify-center flex-col">
                        <p>Apartment</p>
                        <p className="font-light">Property Type</p>
                    </div>
                    <div className="w-full h-32 flex items-center justify-center flex-col">
                        <p>4</p>
                        <p className="font-light">Bedrooms</p>
                    </div>
                    <div className="w-full h-32 flex items-center justify-center flex-col">
                        <p>2</p>
                        <p className="font-light">Bathrooms</p>
                    </div>
                    <div className="w-full h-32 flex items-center justify-center flex-col">
                        <p>1</p>
                        <p className="font-light">Garage</p>
                    </div>
                    <div className="w-full h-32 flex items-center justify-center flex-col">
                        <p>1200</p>
                        <p className="font-light">Sq Ft</p>
                    </div>
                    <div className="w-full h-32 flex items-center justify-center flex-col">
                        <p>2016</p>
                        <p className="font-light">Year Built</p>
                    </div>

                </div>
                <div className="md:w-1/3  h-full">
                    <img src={map} className="w-full h-full object-cover rounded-xl" alt="" />
                </div>
            </div>
        </div>
    </div>;
};

// Description Component
const Description = () => {
    return <div className="w-full">
        <div>
            <h1 className="text-5xl font-semibold py-10 border-b">Description</h1>
            <div className="w-full text-3xl font-light space-y-16 mt-8">
                <p className="leading-normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                    in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                    feugait nulla facilisi.</p>
                <p className="leading-normal">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
                    placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum
                    claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                    etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per
                    seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
                    sollemnes in futurum.</p>
            </div>
        </div>
    </div>;
};

// AllContent Component
const AllContent = () => {
    return (
        <div className="flex md:max-w-[80%] sm:max-w-[90%] lg:max-w-[90%] px-10 m-auto gap-10">
            {/* Left Side (Scrollable Content) */}
            <div className="lg:w-2/3 w-full py-10">
                <Overview />
                <Description />
            </div>

            {/* Right Side (Sticky Content) */}
            <div className=" lg:block hidden sticky top-0 h-fit">
                <PopupForm />
            </div>
        </div>
    );
};

export { Overview, Description };
export default AllContent;
