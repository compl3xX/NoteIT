import { useEffect } from "react";


const useOutsideClick = (ref, callback) => {

    useEffect(() => {

        const HandelClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        }
        
        document.addEventListener('mousedown', HandelClickOutside)

        return () => {
            document.removeEventListener('mousedown', HandelClickOutside)
        }


    }, [ref, callback])
}

export default useOutsideClick