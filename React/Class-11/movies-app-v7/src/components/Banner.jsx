import React from 'react'

const Banner = () => {
  const bannerImageUrl = "https://plus.unsplash.com/premium_photo-1742353866584-27c87d42da99?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  return (
    <section 
      className='relative mb-8 flex items-center justify-center w-full h-[70vh] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bannerImageUrl})` }}
    >
      {/* Gradient overlay for better text readability */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40'></div>
      
      {/* Content */}
      <div className='relative z-10 max-w-4xl mx-auto px-6 text-center'>
        <h2 className='text-6xl md:text-7xl text-white font-bold mb-4 drop-shadow-2xl'>
          Welcome.
        </h2>
        <h3 className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-relaxed drop-shadow-lg'>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
      </div>
    </section>
  )
}

export default Banner
