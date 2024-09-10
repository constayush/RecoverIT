import React from 'react'

function Navbar() {
    return (
        <nav class="sticky top-0 bg-gray-800 text-white shadow-md h-16 mb-16 z-[99] ">
            

                <div class="flex  justify-between items-center w-full h-full px-32">

                    <a href="#" class="text-xl font-semibold">RecoverIT</a>

                    <div class="ml-10 space-x-4 none md:flex">

                        <a href="#" class="text-gray-300 hover:text-white">Home</a>
                        <a href="#" class="text-gray-300 hover:text-white">Report</a>
                        <a href="#" class="text-gray-300 hover:text-white">Contact</a>
                        
                    </div>

                </div>


        </nav>
    )
}

export default Navbar
