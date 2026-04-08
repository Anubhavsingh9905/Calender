import { useState } from 'react'
import './App.css'
import HeroSection from './componenets/HeroSection'
import DateSection from './componenets/DateSection'
import NotesSection from './componenets/NotesSection'
import ring from "./assets/ring.png"

const colors = [
  { main: "#3b82f6", light: "#dbeafe" }, 
  { main: "#06b6d4", light: "#cffafe" }, 
  { main: "#10b981", light: "#d1fae5" },
  { main: "#84cc16", light: "#ecfccb" }, 
  { main: "#eab308", light: "#fef9c3" }, 
  { main: "#f97316", light: "#ffedd5" }, 
  { main: "#f43f5e", light: "#ffe4e6" }, 
  { main: "#ef4444", light: "#fee2e2" },
  { main: "#dc2626", light: "#fee2e2" }, 
  { main: "#be123c", light: "#fff1f2" }, 
  { main: "#9f1239", light: "#fff1f2" }, 
  { main: "#881337", light: "#fff1f2" }, 
];

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [range, setRange] = useState({ start: null, end: null });
  const [animationClass, setAnimationClass] = useState("");

  const monthNum = currentDate.getMonth();
  const color = colors[monthNum];

  const animationDuration = 600;

  const handleMonthChange = (direction) => {
    if (animationClass) return;

    if (direction === "next") {
      setAnimationClass("animateFlipUp");
    } else {
      setAnimationClass("animateFlipDown");
    }

    setTimeout(() => {
      setCurrentDate(prev => {
        const offset = direction === "next" ? 1 : -1;
        return new Date(prev.getFullYear(), prev.getMonth() + offset, 1);
      });

      setAnimationClass("");
    }, animationDuration);
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex justify-center h-[10%] w-full max-md:h-[5%]">
        <img src={ring} alt="" className="w-[45%] max-md:w-[80%]" />
      </div>
      <div className={`w-[45%] h-[90%] relative ${animationClass} flippingPage max-md:w-[80%]`}>
        <div className="w-full h-[50%] bg-white rounded-b-xl max-md:h-[40%]">
          <HeroSection 
            currentDate={currentDate} 
            onNext={() => handleMonthChange("next")} 
            onPrev={() => handleMonthChange("prev")} 
            color={color.main}
          />
        </div>

        <div className="w-full h-[48%] mt-1 shadow-2xl bg-white rounded-b-xl flex justify-end gap-1 max-md:flex-col-reverse">
          <div className='w-[40%] h-full max-md:w-full shadow-2x'>
            <div className='w-full h-[15%] text-yellow-600 flex gap-4 shadow-2xl items-center bg-white'>
              <h1 className="text-sm font-bold">
                Start: {range?.start ? range.start.toLocaleDateString() : 'N/A'}
              </h1>
              <h1 className="text-sm font-bold">
                End: {range?.end ? range.end.toLocaleDateString() : 'N/A'}
              </h1>
            </div>
            <div className='w-full h-[85%]'>
              <NotesSection range={range} color={color.main}/>
            </div>
          </div>
          <div className='w-[60%] h-full shadow-2xl bg-white rounded-b-xl pb-5 flex max-md:w-full'>
            <DateSection currentDate={currentDate} range={range} setRange={setRange} color={color}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
