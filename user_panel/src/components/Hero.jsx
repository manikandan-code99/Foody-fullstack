
const heroImage = "/mnt/data/Screenshot 2025-11-25 110911.png";

export default function Hero() {
  return (
    <section className="w-full hero-dim bg-cover bg-center bg-no-repeat"style={{backgroundImage: "url('src/assets/pizza image.jpeg')"}}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20 flex flex-col md:flex-row gap-8 items-center">
        {/* Left Text */}
        <div className="md:w-1/2 text-white">
          <p className="text-sm mb-3">Fast &amp; Hot Burger Delivery</p>
          <h1 className="text-4xl md:text-6xl font-bold text-brandYellow leading-tight">
            Order Healthy &amp; <br /> Fresh Food Any Time
          </h1>
          <p className="mt-4 text-sm text-white/80 max-w-lg">
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
            sit amet adipiscing sem neque sed ipsum.
          </p>
          <button className="mt-6 bg-brandYellow text-black px-4 py-2 rounded font-semibold">
            Explore More!
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-end w-full">
         
        </div>
      </div>
    </section>
  );
}
