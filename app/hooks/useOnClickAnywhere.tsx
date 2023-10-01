import React from 'react'



const useOnClickAnywhere = (inputRef : React.RefObject<HTMLInputElement>) => {

    const handleClickOutside = (event : MouseEvent ) => {
        if(inputRef.current && !inputRef.current.contains(event.target as Node)){
            inputRef.current.focus();
        }
    }

    React.useEffect(() => {
        // document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("mouseup", handleClickOutside);

        return () => {
            // document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("mouseup", handleClickOutside);
        }
    }, [inputRef])
    
}

export default useOnClickAnywhere