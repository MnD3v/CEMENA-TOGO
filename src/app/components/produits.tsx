import React from 'react'

const Produits = () => {


    return (
        <div className='flex  justify-center py-10 my-10 '>
            <div className='m-2'>
                <div className='flex items-center justify-center mb-5'>
                    <img src="/utils/feuille.png" alt="" className='h-10' />
                    <p className=' uppercase text-lg text-green-600 font-medium '>Nos PRODUITS</p></div>
                <div className='max grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => (
                            <a key={element} href='' className='relative group
                           flex flex-col items-center justify-center
                            my-6
                             bg-white hover:bg-green-50 border-2 border-green-300 rounded-2xl  '>
                                <img src="/produits/produit-1.png" alt="" className='absolute  -top-8  h-24 group-hover:scale-125' />
                                <div className='  flex flex-col items-center p-2 mt-16'>

                                    <p className='text-xl  font-bricolage font-semibold '>Sinus</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, {element}</p>
                                    <button onClick={() => {

                                    }} className='text-white hover:text-white w-full py-3 bg-green-400 hover:bg-green-900 border border-white hover:ring ring-green-900 rounded-xl'>Voir</button>
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