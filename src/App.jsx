import './App.css'
import HeroSlider from './components/Hero'
import Carousel from './components/Carousel'

function App() {
  const slides = [
    { src: '/images/product-1.jpg', alt: 'left' },
    { src: '/images/product-2', alt: 'center' },
    { src: '/images/product-3.jpg', alt: 'right' }
  ]

  return (
    <>
      <div className=''>
        <HeroSlider />
      </div>
      <div className="min-h-screen bg-white py-16 px-4">
        <header className="py-10"></header>

        <main>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold">Quality Products</h1>
            <p className="text-gray-500 mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="mt-16">
            <Carousel slides={slides} autoplay={true} interval={6000} />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
