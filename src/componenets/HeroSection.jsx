import React from "react";

const images = [
    "https://images.unsplash.com/photo-1709517659952-263e00150b65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    "https://media.istockphoto.com/id/1780334478/photo/switzerland-travel-rear-view-of-mature-woman-hiking-the-matterhorn.webp?a=1&b=1&s=612x612&w=0&k=20&c=w8qHvfeGh3YI9uKPHWywqf7OjV9yQb_zYvsP5Mh5Br0=",
    "https://media.istockphoto.com/id/1055073610/photo/climbers-on-a-snowy-slope.webp?a=1&b=1&s=612x612&w=0&k=20&c=eVSD2ftOF0QuClmuFHQR1uWoctUdHmQItfd2iDXW_Ck=",
    "https://images.unsplash.com/photo-1502126324834-38f8e02d7160?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpbWIlMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1664300548468-f83f7927c7f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBjbGltYmVyfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1555936337-1ec53172d6f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBjbGltYmVyfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1626957902611-81189024dd78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1701308356218-7d2de87e9de7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1431887915357-68b819fae322?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1175916836/photo/man-hiking-the-perito-moreno-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=fLBZh9Ca8Zkl_t9nHlNTSO0c-0YQexPoeO4w5wNqrqo=",
    "https://images.unsplash.com/photo-1458442310124-dde6edb43d10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBjbGltYmVyfGVufDB8fDB8fHww",
    "https://images.stockcake.com/public/1/5/8/15873bf8-a5d3-4ca4-9626-e997864caedd_large/mountaintop-flag-celebration-stockcake.jpg"
]
function HeroSection({ currentDate, onNext, onPrev, color}) {
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    const monthNum = currentDate.getMonth();
    // console.log(monthNum);
    return (
        <div className="h-full w-full">
            <div className="overflow-hidden flex justify-center h-full w-full z-10 relative top-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 40%, 50% 100%, 0 70%)" }}>
                <img src={images[monthNum]} alt="" className="w-full h-full" />
            </div>
            <div
                style={{ backgroundColor: color}}
                className={`w-full flex flex-col gap-1 items-end justify-end pl-1 pr-2 pb-1 relative bottom-45 shadow-2xl max-md:bottom-50 max-md:h-[61%]`}>
                <div
                    className="text-white pb-3 text-right w-[20%] h-37 flex flex-col justify-end items-end"
                >
                    <h2 className="text-xl font-bold">{month}</h2>
                    <p className="text-lg">{year}</p>
                </div>
                <div className="flex text-right gap-2">
                    <button onClick={onPrev} className="bg-white/20 hover:bg-white/40 px-2 rounded text-black">←</button>
                    <button onClick={onNext} className="bg-white/20 hover:bg-white/40 px-2 rounded text-black">→</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;