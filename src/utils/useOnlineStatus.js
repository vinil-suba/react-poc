import { useEffect, useState } from "react";

const useOnlineStatus = () => {
const[onlinStatus, setOnlinStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlinStatus(true);
        })
    }, []);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlinStatus(false);
        })
    }, []);
console.log("status", onlinStatus)
    return onlinStatus;
}

export default useOnlineStatus;