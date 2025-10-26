import './App.css'
import HeroSlider from './components/Hero'
import Carousel from './components/Carousel'

function App() {
  const slides = [
    {
      src: "/images/product-1.jpg",
      alt: "Client 1",
      caption: "Client 1",
      sub: "Dubai, United Arab Emirates",
    },
    {
      src: "/images/product-2.jpg",
      alt: "Client 2",
      caption: "Client 2",
      sub: "Kuala Lumpur, Malaysia",
    },
    {
      src: "/images/product-3.jpg",
      alt: "Client 3",
      caption: "Client 3",
      sub: "Singapore",
    },
    {
      src: "/images/product-1.jpg",
      alt: "Client 4",
      caption: "Client 4",
      sub: "Sharjah, United Arab Emirates",
    },
  ];
  

  return (
    <>
      <div className=''>
        <HeroSlider />
      </div>
      <div className="min-h-screen bg-white">
        <header className="py-10"></header>

        <main>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[56px] md:text-[40px] line-height-1.2 font-normal">Quality Products</h1>
            <p className="text-gray-500 mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="mt-16">
            <Carousel slides={slides} />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
