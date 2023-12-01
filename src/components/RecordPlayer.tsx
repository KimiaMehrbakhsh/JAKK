import React from "react";


interface RecordDiskProps {
    size?: number;
    color?: string;

}
const RecordDisk: React.FC<RecordDiskProps> = ( { size = '30%', color = '#333'}) =>{
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill={color} />
        <circle cx="50" cy="50" r="40" fill="#fff" />
        <circle cx="50" cy="50" r="5" fill="#333" />
     </svg>
    );



};

export default RecordDisk;