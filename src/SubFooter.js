import React from "react";

const CloseBar = () => {
    return (
        <footer className="flex flex-col md:flex-row w-full justify-between items-center p-2 md:p-5 absolute text-white h-auto rounded-lg bg-gray-200">
            <div className="flex flex-col justify-start items-start text-lg md:text-lg font-bold text-black p-2 mb-2 md:mb-0 w-full">
                <span>HB SPACE TL</span>
                <span className="text-sm font-serif mt-14">
                    By using this site, you agree to our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/terms-conditions" className="text-blue-600 hover:underline">Terms & Conditions</a>.
                </span>
            </div>
        </footer>
    );
}

export default CloseBar;
