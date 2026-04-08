import React, { useState } from "react";

function NotesSection({range, color}){
    const [note, setNote] = useState("");

    const handleChange = (e) => {
        setNote(e.target.value);
    }

    return(
        <div className="w-full h-full">
            <textarea
                placeholder="Enter your monthly memo for selected date...." 
                onChange={handleChange}
                value={note}
                className="p-2 w-full h-full outline-1 font-medium bg-white" 
                style={{color: color, outlineColor: color}}
            >
            </textarea>
        </div>
    )
}

export default NotesSection;