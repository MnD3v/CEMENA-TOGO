import React from 'react'

const Produits = () => {


    return (
        <div className='flex  justify-center py-10 my-10 '>
            <div className='m-2'>
                <div className='flex items-center justify-center mb-5'>
                    <img src="/utils/feuille.png" alt="" className='h-10' />
                    <p className=' uppercase text-lg text-green-600 font-medium '>Nos PRODUITS</p></div>
                <div className='max grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => (
                            <a href='' className=' bg-white hover:bg-green-100 hover:scale-105 px-3 border border-green-200 rounded-3xl my-6'>
                                <div className='relative -top-9 flex flex-col items-center text-center'>
                                    <img src="/produits/produit-1.png" alt="" className='h-32 ' />
                                    <p className='text-xl  font-bricolage font-semibold text-green-600'>Sinus</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, {element}</p>
                                </div>

                            </a>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Produits