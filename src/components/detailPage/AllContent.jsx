import React, { useState } from "react";
import PopupForm from "./PopupForm";
import map from '../../assets1/AllContent/overview/map.png'
import { CiMap } from "react-icons/ci";
import firstFloorImage from "../../assets1/AllContent/FloorPlans/img1.jpeg";
import secondFloorImage from "../../assets1/AllContent/FloorPlans/img2.jpeg";
import VirtualTourImage from "../../assets1/AllContent/360degree/img.png";
import time from "../../assets1/AllContent/360degree/time.jpeg";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

import view from '../../assets1/AllContent/360degree/view.svg'
import view1 from '../../assets1/AllContent/360degree/view1.svg'
import view2 from '../../assets1/AllContent/360degree/view2.svg'
import play from '../../assets1/AllContent/360degree/play.svg'
import dailog from '../../assets1/AllContent/360degree/dailog.svg'
import fullscreen from '../../assets1/AllContent/360degree/fullscreen.svg'
import group from '../../assets1/AllContent/360degree/group.svg'
import open from '../../assets1/AllContent/360degree/open.svg'
import share from '../../assets1/AllContent/360degree/share.svg'
import { BiCheck, BiChevronDown, BiChevronLeft, BiChevronRight, BiCopy, BiMobile, BiPhone, BiUser } from "react-icons/bi";
import { BsFacebook, BsGlobe, BsInstagram, BsLinkedin, BsStarFill, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import img from '../../assets1/AllContent/Similar/img.jpeg'


const Overview = () => {
    return (
        <div className="w-full h-fit">
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
                    <div className="md:w-1/3 h-full">
                        <iframe
                            className="w-full h-full rounded-xl"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232144.40547682562!2d77.31725326514993!3d23.259933307425956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c427d0509e7a1%3A0x368860bad8c6c233!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1694708502871!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};


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

const Details = () => {
    const details = {
        updatedAt: "Updated on April 17, 2020 at 6:19 am",
        data: {
            "Property ID": "hz-HZ40",
            Price: "From ₹45,000/-",
            "Property Size": "1200 Sq Ft",
            "Year Built": "2024",
            Bedrooms: "4",
            Bathrooms: "2",
            "Garage Size": "200 SqFt",
            Garage: "1",
            "Property Type": "Apartment",
            "Property Status": "For Rent",
        }
    }
    return <div>
        <div className="mb-6">
            <div className="flex justify-between items-center  py-8 mb-5 border-b">
                <h2 className="text-5xl font-semibold ">Details</h2>
                <p className=" text-gray-500 text-2xl">{details.updatedAt}</p>
            </div>
            <div className="border p-4 rounded-lg  bg-gray-50 text-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
                    {Object.keys(details.data).map((key, index) => (
                        <p key={index} className="border-b py-5 flex justify-between">
                            <span className="font-semibold">{key}:</span> {details.data[key]}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
}

const Additional = () => {
    const additionalDetails = {
        Deposit: "20%",
        Amenities: "Clubhouse",
        "Pool Size": "300 Sqft",
        "Additional Rooms": "Guest Bath",
        "Last Remodel Year": "1987",
        Equipment: "Grill - Gas",
    };
    return <div>
        <div className="mb-6">
            <h2 className="text-5xl font-semibold py-8 mb-5 border-b">Additional Details</h2>
            <div className="p-4 rounded-lg  text-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                    {Object.keys(additionalDetails).map((key, index) => (
                        <p key={index} className="border-b py-5 flex justify-between">
                            <span className="font-semibold">{key}:</span>{" "}
                            {additionalDetails[key]}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
}

const Address = () => {
    const address = {
        Address: "172 Gujar Pura",
        "Zip/Postal Code": "462001",
        City: "Bhopal",
        Area: "Peer Gate",
        "State/County": "Madhya Pradesh",
        Country: "India",
    };
    return <div>
        <div className="mb-6">
            <div className="py-8 mb-5 border-b flex justify-between items-center ">
                <h2 className="text-5xl font-semibold ">Address</h2>
                <button className='text-2xl text-white mr-5 px-4 py-2 rounded-md flex gap-2 items-center' style={{ background: "var(--primary-yellow)" }}>
                    <p className="text-4xl"><CiMap /></p>
                    Open on Google Maps
                </button>
            </div>
            <div className="p-4 rounded-lg  text-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                    {Object.keys(address).map((key, index) => (
                        <p key={index} className="border-b py-5 flex justify-between">
                            <span className="font-semibold">{key}:</span>{" "}
                            {address[key]}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
}

const Features = () => {
    const features = [
        "Air Conditioning",
        "Lawn",
        "Swimming Pool",
        "Barbeque",
        "Microwave",
        "TV Cable",
        "Dryer",
        "Outdoor Shower",
        "Washer",
        "Gym",
        "Refrigerator",
        "WiFi",
        "Laundry",
        "Sauna",
        "Window Coverings",
    ];
    return <div>
        <div className="mb-6">
            <h2 className="text-5xl font-semibold py-8 mb-5 border-b">Features</h2>
            <div className="p-4 rounded-lg text-2xl  grid grid-cols-2 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <p key={index} className="flex items-center gap-2">
                        <span className="text-green-600 border px-2 rounded-full text-2xl">✔</span> {feature}
                    </p>
                ))}
            </div>
        </div>
    </div>
}

const FloorPlans = () => {
    const floorData = [
        {
            title: "First Floor",
            size: "1267 Sqft",
            bedrooms: 2,
            bathrooms: 1,
            price: "$1,650",
            image: firstFloorImage,
            description:
                "Plan description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Second Floor",
            size: "1345 Sqft",
            bedrooms: 3,
            bathrooms: 2,
            price: "$1,600",
            image: secondFloorImage,
            description:
                "Plan description. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        },
    ];

    return (
        <div className="w-full max-w-screen-lg mx-auto px-5 py-10">
            <h1 className="text-5xl font-semibold py-8 mb-5 border-b">Floor Plans</h1>
            <div className="w-full flex flex-col gap-10 mt-10">
                {floorData.map((floor, index) => (
                    <div key={index} className="w-full flex flex-col items-start gap-5">
                        {/* Left Side: Floor Plan Details */}
                        <div className=" w-full flex flex-col md:flex-row  justify-between gap-4">
                            <div className="text-3xl font-semibold flex items-center gap-2">
                                <span>🏠</span>
                                {floor.title}
                            </div>
                            <div className="flex font-normal gap-4 text-2xl">
                                <p>Size: {floor.size}</p>
                                <p>🛏 {floor.bedrooms} Beds</p>
                                <p>🛁 {floor.bathrooms} Baths</p>
                                <p>Price: {floor.price}</p>
                            </div>

                        </div>

                        {/* Right Side: Floor Plan Image */}
                        <div className=" w-full">
                            <img
                                src={floor.image}
                                alt={`${floor.title} Plan`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="text-gray-700 text-2xl mt-4">description : {floor.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const VideoModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const videoData = {
        title: "Video",
        videoId: "Ef3M3XPBXpA",
        url: "https://www.youtube.com/embed/Ef3M3XPBXpA",
    };

    const thumbnailUrl = `https://img.youtube.com/vi/${videoData.videoId}/hqdefault.jpg`;

    return (
        <div className="w-full">
            <h2 className="text-5xl font-semibold py-10 mb-10 border-b">{videoData.title}</h2>
            <div
                className="relative w-full cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <img
                    src={thumbnailUrl}
                    alt="Video Thumbnail"
                    className="w-full md:h-[70vh] h-auto object-cover rounded-3xl shadow-md"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button
                        className="bg-red-500 text-white rounded-3xl w-28 h-20 flex items-center justify-center shadow-lg"
                        aria-label="Play Video"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-16 h-16"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.752 11.168l-5.197-3.02A1 1 0 008 9.01v6.02a1 1 0 001.555.832l5.197-3.02a1 1 0 000-1.664z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-7xl">
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-gray-700"
                            aria-label="Close Video"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>

                        <iframe
                            src={`${videoData.url}?autoplay=1`}
                            title="Video Player"
                            className="w-full h-[50vh] sm:h-[500px] rounded-lg"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};


const VirtualTour = () => {
    const videoData = {
        title: "360° Virtual Tour",
    };

    const thumbnailUrl = VirtualTourImage;

    return (
        <div className="w-full">
            <h2 className="text-5xl font-semibold py-10 mb-10 border-b">{videoData.title}</h2>
            <div
                className="relative w-full "
            >
                <img
                    src={thumbnailUrl}
                    alt="Video Thumbnail"
                    className="w-full md:h-[80vh] h-auto object-cover rounded-xl shadow-md"
                />
                <div className="absolute w-full h-full flex flex-col justify-between top-0 left-0 p-8">
                    <div className="text-2xl flex  items-center gap-5">
                        <div>
                            <div className="md:w-24 md:h-24 w-16 h-16 text-3xl bg-black/50 rounded-full flex items-center justify-center text-white font-bold md:text-5xl"><IoIosSearch /></div>
                        </div>
                        <div className="text-white">
                            <p>Presented by Hulu</p>
                            <div className="flex gap-3 text-3xl items-center">
                                <p><IoLocationOutline /></p>
                                <p>Seinfeld Apartment</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-5">
                                <div className="bg-black/50 flex gap-5 px-6 py-3 rounded-full">
                                    <img src={open} className="md:w-10 w-7" alt="" />
                                    <img src={play} className="md:w-10 w-7" alt="" />
                                </div>
                                <div className="flex gap-5">
                                    <img src={view1} className="md:w-10 w-7" alt="" />
                                    <img src={view} className="md:w-10 w-7" alt="" />
                                    <img src={view2} className="md:w-10 w-7" alt="" />
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="flex gap-5">
                                    <img src={share} className="md:w-10 w-7" alt="" />
                                    <img src={dailog} className="md:w-10 w-7" alt="" />
                                    <img src={fullscreen} className="md:w-10 w-7" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-end">
                            <div className="flex gap-5 items-center text-white text-2xl font-bold">
                                <p>Help</p>
                                <p>Term</p>
                                <img src={group} className="md:w-10 w-7" alt="" />
                                <p>Matterport</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

const PropertyTourScheduler = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [tourType, setTourType] = useState("in-person");
    const [startIndex, setStartIndex] = useState(0); // Tracks the start index of the visible range

    const visibleDatesCount = 5; // Number of dates visible at a time

    // Generate dates for the calendar
    const getDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 15; i++) { // Generate more dates for navigation
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push(date);
        }
        return dates;
    };

    const dates = getDates();

    // Handle arrow clicks
    const handleLeftClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (startIndex < dates.length - visibleDatesCount) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className="w-full mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Property Image */}
                <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                    <img
                        src={time}
                        alt="Modern Luxury Home"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Booking Form */}
                <div className="p-6">
                    <h2 className="text-4xl font-semibold mb-6">Schedule a Tour</h2>

                    {/* Date Selector */}
                    <div className="relative mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <button
                                onClick={handleLeftClick}
                                className={`p-2 bg-gray-100 rounded-full ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                                disabled={startIndex === 0}
                            >
                                <BiChevronLeft className="w-10 h-10" />
                            </button>
                            <div className="flex space-x-2">
                                {dates.slice(startIndex, startIndex + visibleDatesCount).map((date) => (
                                    <button
                                        key={date.toISOString()}
                                        onClick={() => setSelectedDate(date)}
                                        className={`flex flex-col items-center p-3 md:px-8 px-5 rounded-lg transition-colors bg-gray-100 border border-blue-500
                                            ${selectedDate?.toDateString() === date.toDateString()
                                                ? "bg-blue-50"
                                                : "hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-xl text-gray-600">
                                            {date.toLocaleDateString("en-US", { weekday: "short" })}
                                        </span>
                                        <span className="text-2xl font-light">{date.getDate()}</span>
                                        <span className="text-xl text-gray-600">
                                            {date.toLocaleDateString("en-US", { month: "short" })}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={handleRightClick}
                                className={`p-2 bg-gray-100 rounded-full ${startIndex >= dates.length - visibleDatesCount ? "opacity-50 cursor-not-allowed" : ""}`}
                                disabled={startIndex >= dates.length - visibleDatesCount}
                            >
                                <BiChevronRight className="w-10 h-10" />
                            </button>
                        </div>
                    </div>

                    {/* Tour Type */}
                    <div className="mb-6">
                        <p className="text-2xl font-medium mb-2">Tour Type</p>
                        <div className="grid grid-cols-2 gap-4 text-2xl mt-5">
                            {/* <button
                                onClick={() => setTourType("in-person")}
                                className={`p-3 rounded-lg border text-center transition-colors
                                    ${tourType === "in-person"
                                        ? "border-orange-500 bg-orange-50 text-orange-700"
                                        : "border-gray-200 hover:border-gray-300"
                                    }`}
                            >
                                In Person
                            </button>
                            <button
                                onClick={() => setTourType("video")}
                                className={`p-3 rounded-lg border text-center transition-colors
                                    ${tourType === "video"
                                        ? "border-orange-500 bg-orange-50 text-orange-700"
                                        : "border-gray-200 hover:border-gray-300"
                                    }`}
                            >
                                Video Chat
                            </button> */}
                            <button className=' text-white text-3xl  mr-5 w-full px-4 py-4 rounded-md' style={{ background: "var(--primary-yellow)" }}>In Person</button>
                            <button className=' text-black text-3xl bg-gray-100  mr-5 w-full border border-red-300 px-4 py-4 rounded-md'>Video Chat</button>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4 text-2xl">
                        <select className="w-full p-4 border border-gray-200 rounded-lg outline-none">
                            <option value="">Select Time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-4 border border-gray-200 rounded-lg outline-none"
                        />

                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full p-4 border border-gray-200 rounded-lg outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 border border-gray-200 rounded-lg outline-none"
                        />

                        <textarea
                            placeholder="Enter your Message"
                            rows={4}
                            className="w-full p-4 border border-gray-200 rounded-lg outline-none resize-none"
                        />

                        <div className="flex items-center text-2xl text-gray-600">
                            <span>By submitting this form I agree to</span>
                            <button className="ml-1 hover:underline" style={{ color: "var(--primary-yellow)" }}>
                                Terms of Use
                            </button>
                        </div>

                        <button className="w-full p-4 py-5  text-white rounded-lg transition-colors" style={{ background: "var(--primary-yellow)" }}>
                            Submit a Tour Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WalkscoreDisplay = ({
    address = "172 Gujar Pura, Peer Gate, Huzur , Bhopal M.P 462001",
    walkScore = 88,
    transitScore = 52,
    bikeScore = 60,
    reviews = 0,
    rating = 4
}) => {
    // Generate star rating array
    const stars = Array(5).fill(0).map((_, index) => ({
        filled: index < Math.floor(rating)
    }));

    return (
        <div className="w-full p-4">
            {/* Header */}
            <h2 className="text-5xl font-semibold py-10 mb-10 border-b">Walkscore</h2>

            {/* Address */}
            <p className="text-gray-600 mb-6 text-2xl">{address}</p>

            {/* Scores Grid */}
            <div className="grid grid-cols-1 gap-10 mb-6">
                {/* Walk Score */}
                <div className="flex items-start space-x-3">
                    <div className="relative">
                        <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center border-2 border-blue-500">
                            <span className="text-3xl font-bold text-blue-700">{walkScore}</span>
                        </div>
                        {/* <MapPin className="w-5 h-5 text-blue-500 absolute -bottom-2 -right-2" /> */}
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 text-3xl">Very Walkable</h3>
                        <p className="text-2xl text-gray-600">Most errands can be accomplished on foot</p>
                    </div>
                </div>

                {/* Transit Score */}
                <div className="flex items-start space-x-3">
                    <div className="relative">
                        <div className="w-20 h-20 bg-green-50 rounded-lg flex items-center justify-center border-2 border-green-500">
                            <span className="text-2xl font-bold text-green-700">{transitScore}</span>
                        </div>
                        {/* <Navigation className="w-5 h-5 text-green-500 absolute -bottom-2 -right-2" /> */}
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 text-3xl">Good Transit</h3>
                        <p className="text-2xl text-gray-600">Many nearby public transportation options</p>
                    </div>
                </div>

                {/* Bike Score */}
                <div className="flex items-start space-x-3">
                    <div className="relative">
                        <div className="w-20 h-20 bg-orange-50 rounded-lg flex items-center justify-center border-2 border-orange-500">
                            <span className="text-2xl font-bold text-orange-700">{bikeScore}</span>
                        </div>
                        {/* <Bike className="w-5 h-5 text-orange-500 absolute -bottom-2 -right-2" /> */}
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 text-3xl">Bikeable</h3>
                        <p className="text-2xl text-gray-600">Some bike infrastructure</p>
                    </div>
                </div>
            </div>

            {/* Map Link */}
            <button className=" transition-colors text-xl mb-8" style={{ color: "var(--primary-yellow)" }}>
                View map of nearby restaurants, grocery stores, and more.
            </button>

            {/* Reviews Section */}
            <div className="flex flex-col sm:flex-row items-start text-2xl sm:items-center justify-between gap-4 border-t pt-4">
                <div className="flex items-center space-x-2">
                    <span className="text-gray-700">{reviews} Review</span>
                    <div className="flex items-center space-x-1">
                        {stars.map((star, index) => (
                            <BsStarFill
                                key={index}
                                className={`w-5 h-5 ${star.filled ? 'fill-orange-400 text-orange-400' : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-gray-500">({rating} out of 5)</span>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-600">Sort by:</span>
                        <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                            <span>Default Order</span>
                            <BiChevronDown className="w-8 h-8" />
                        </button>
                    </div>
                    <button className="px-4 py-2  text-white rounded transition-colors" style={{ background: "var(--primary-yellow)" }}>
                        Leave a Review
                    </button>
                </div>
            </div>
        </div>
    );
};

const ReviewForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        title: '',
        rating: 0,
        review: ''
    });

    const [errors, setErrors] = useState({});
    const [hoveredRating, setHoveredRating] = useState(0);

    const validateForm = () => {
        const newErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        }

        if (formData.rating === 0) {
            newErrors.rating = 'Please select a rating';
        }

        if (!formData.review.trim()) {
            newErrors.review = 'Review is required';
        } else if (formData.review.trim().length < 10) {
            newErrors.review = 'Review must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            // Handle form submission
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleRatingClick = (rating) => {
        setFormData(prev => ({
            ...prev,
            rating
        }));
        if (errors.rating) {
            setErrors(prev => ({
                ...prev,
                rating: ''
            }));
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-5xl font-semibold py-10 border-b"> Leave a Review</h1>
            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                {/* Email Field */}
                <div>
                    <label className="block text-3xl font-medium text-gray-700 mb-4">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-4 text-2xl outline-none rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                    {errors.email && (
                        <p className="mt-1 text-xl text-red-500">{errors.email}</p>
                    )}
                </div>

                {/* Title and Rating Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title Field */}
                    <div>
                        <label className="block text-3xl font-medium text-gray-700 mb-4">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter a title"
                            className={`w-full px-4 py-4 text-2xl outline-none rounded-lg border ${errors.title ? 'border-red-500' : 'border-gray-300'
                                } `}
                        />
                        {errors.title && (
                            <p className="mt-1 text-xl text-red-500">{errors.title}</p>
                        )}
                    </div>

                    {/* Rating Field */}
                    <div>
                        <label className="block text-3xl font-medium text-gray-700 mb-4">
                            Rating
                        </label>
                        <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <button
                                    key={rating}
                                    type="button"
                                    onMouseEnter={() => setHoveredRating(rating)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                    onClick={() => handleRatingClick(rating)}
                                    className="p-1 hover:scale-110 transition-transform"
                                >
                                    <BsStarFill
                                        className={`w-6 h-6 ${rating <= (hoveredRating || formData.rating)
                                            ? 'fill-orange-400 text-orange-400'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                        {errors.rating && (
                            <p className="mt-1 text-xl text-red-500">{errors.rating}</p>
                        )}
                    </div>
                </div>

                {/* Review Field */}
                <div>
                    <label className="block text-3xl font-medium text-gray-700 mb-4">
                        Review
                    </label>
                    <textarea
                        name="review"
                        value={formData.review}
                        onChange={handleInputChange}
                        placeholder="Write a review"
                        rows={6}
                        className={`w-full px-4 py-4  text-2xl outline-none rounded-lg border ${errors.review ? 'border-red-500' : 'border-gray-300'
                            }  resize-none`}
                    />
                    {errors.review && (
                        <p className="mt-1 text-xl text-red-500">{errors.review}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-4 text-white rounded-lg text-2xl"
                    style={{ background: "var(--primary-yellow)" }}>
                    Submit Review
                </button>
            </form>
        </div>
    );
};

const Similar = () => {
    const Data = [
        {
            title: "Modern Apartment",
            size: "1267 Sqft",
            bedrooms: 2,
            bathrooms: 1,
            price: "$1,650",
            image: img,
        },
        {
            title: "Modern Apartment",
            size: "1345 Sqft",
            bedrooms: 3,
            bathrooms: 2,
            price: "$1,600",
            image: img,
        },
        {
            title: "Modern Apartment",
            size: "1267 Sqft",
            bedrooms: 2,
            bathrooms: 1,
            price: "$1,650",
            image: img,
        },
        {
            title: "Modern Apartment",
            size: "1345 Sqft",
            bedrooms: 3,
            bathrooms: 2,
            price: "$1,600",
            image: img,
        },
    ];
    return <div>
        <h2 className="text-5xl font-semibold py-10 mb-10 border-b">Similar Listings</h2>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full ">
            {Data.map((item, index) => (
                <div key={index} className="w-full h-fit ">
                    <div className="w-full h-[33rem]">
                        <img src={item.image} className="w-full h-full" alt="" />
                    </div>
                    <div className="text-2xl space-y-4 p-5">
                        <p className="font-semibold text-3xl">{item.title}</p>
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <p style={{ color: "var(--primary-yellow)" }}>₹970000.00</p>
                            <div className="flex font-normal items-center gap-4 text-2xl">
                                <p>Size: {item.size}</p>
                                <p> <span className="text-4xl">🛏</span> {item.bedrooms} </p>
                                <p><span className="text-4xl">🛁</span> {item.bathrooms} </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        userType: '',
        message: ''
    });

    const [copied, setCopied] = useState('');

    const socialLinks = [
        { icon: BsFacebook, link: '#', color: 'text-blue-600' },
        { icon: BsInstagram, link: '#', color: 'text-pink-600' },
        { icon: BsTwitter, link: '#', color: 'text-blue-400' },
        { icon: BsLinkedin, link: '#', color: 'text-blue-700' },
        { icon: BsYoutube, link: '#', color: 'text-red-600' },
        { icon: BsGlobe, link: '#', color: 'text-gray-600' }
    ];

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(''), 2000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <div className="w-full p-6 mt-10">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-5xl font-semibold text-gray-800">Contact Information</h2>
                <button className="px-4 py-2 text-white text-2xl rounded transition-colors" style={{ background: "var(--primary-yellow)" }}>
                    View Listings
                </button>
            </div>

            {/* Agent Information */}
            <div className="flex flex-col gap-5 md:flex-row items-start space-x-4 mb-8">
                <div className='w-36 h-36 bg-red-600 overflow-hidden rounded-lg'>
                    <img className='w-full h-full object-cover' src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="flex-1 text-2xl">
                    <div className="flex items-center space-x-2 mb-2">
                        <BiUser className="w-8 h-8 text-gray-600" />
                        <span className="font-medium">Sundram Jatav</span>
                    </div>

                    {/* Contact Numbers */}
                    <div className="flex gap-10  space-y-2">
                        <div className="flex items-center space-x-2">
                            <BiPhone className="w-8 h-8 text-gray-600" />
                            <span className="text-gray-700">7024393158</span>
                            <button
                                onClick={() => handleCopy('7024393158')}
                                className="p-1 hover:bg-gray-100 rounded"
                            >
                                {copied === '7024393158' ? (
                                    <BiCheck className="w-8 h-8 text-green-500" />
                                ) : (
                                    <BiCopy className="w-8 h-8 text-gray-400" />
                                )}
                            </button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <BiMobile className="w-8 h-8 text-gray-600" />
                            <span className="text-gray-700">7024393158</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <BsWhatsapp />
                            <span className="text-gray-700">7024393158</span>

                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-3 mt-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                className={`${social.color} hover:opacity-80 transition-opacity`}
                            >
                                <social.icon className="w-8 h-8" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg">
                <h3 className="text-3xl font-medium py-6 mb-8 border-b">Enquire About This Property</h3>
                <form onSubmit={handleSubmit} className="space-y-6 text-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-3xl font-medium text-gray-700 mb-4">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                required
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                className="w-full px-4 py-4 rounded-lg border border-gray-300 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-3xl font-medium text-gray-700 mb-4">
                                Phone
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your Phone"
                                className="w-full px-4 py-4 rounded-lg border border-gray-300 outline-none"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-3xl font-medium text-gray-700 mb-4">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-4 rounded-lg border border-gray-300 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-3xl font-medium text-gray-700 mb-4">
                                I'm a
                            </label>
                            <select
                                name="userType"
                                value={formData.userType}
                                required
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 rounded-lg border border-gray-300 outline-none"
                            >
                                <option value="">Select</option>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                                <option value="agent">Agent</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-3xl font-medium text-gray-700 mb-4">
                            Message
                        </label>
                        <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Hello, I am interested in [Modern apartment on the bay]"
                            rows={4}
                            className="w-full px-4 py-4 rounded-lg border border-gray-300 outline-none resize-none"
                        />
                    </div>

                    {/* Terms and Submit */}
                    <div className="space-y-4">
                        <div className="text-2xl text-gray-600">
                            By submitting this form I agree to{' '}
                            <button className=" hover:underline" style={{ color: "var(--primary-yellow)" }}>
                                Terms of Use
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-3  text-white rounded-lg transition-colors"
                            style={{ background: "var(--primary-yellow)" }}
                        >
                            Request Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const AllContent = () => {
    return (
        <div className="flex md:max-w-[80%] sm:max-w-[90%] lg:max-w-[90%] px-10 m-auto mb-10 gap-10">
            {/* Left Side (Scrollable Content) */}
            <div className="lg:w-2/3 w-full py-10">
                <Overview />
                <Description />
                <Details />
                <Additional />
                <Address />
                <Features />
                <FloorPlans />
                <VideoModal />
                <VirtualTour />
                <PropertyTourScheduler />
                <WalkscoreDisplay />
                <ReviewForm />
                <Similar />
                <ContactForm />
            </div>

            {/* Right Side (Sticky Content) */}
            <div className=" lg:block hidden sticky top-0 h-fit">
                <PopupForm />
            </div>
        </div>
    );
};

export { Overview, Description, Details, Additional, Address, Features, FloorPlans, VideoModal, VirtualTour, PropertyTourScheduler, WalkscoreDisplay, ReviewForm, Similar, ContactForm };
export default AllContent;
