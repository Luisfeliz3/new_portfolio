import image_1 from "./image/IMG_0250.jpg";

function App() {
  return (
    <div className=" bg-black">
      <div
        className="min-w-[1000px] max-w-[1225px]  m-auto
                    bg-neutral-900 text-center flex justify-center h-[1200px]"
      >
        <a
          aria-label="Home"
          className="pointer-events-auto m-6 w-[70px] h-[152px]"
          href="/"
        >
          <img
            className="size-12 rounded-full"
            alt="portfolio_image"
            src={image_1}
          />
        </a>
        <div className="w-2/3 h-1/5 flex justify-center align-items: baseline m-6">
          <div className="text-white text-size-medium bg-neutral-800 h-[50px] w-[310px] ml-[-125px] rounded-full">
            <div className="flex justify-between m-1 text-xs p-3 cursor-pointer">
              <a className="dark:hover:text-teal-400">About</a>
              <a className="dark:hover:text-teal-400">Projects</a>
              <a className="dark:hover:text-teal-400">Contact</a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="relative w-1/3 left-[450px] top-[-1028px]">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Engineer, music, and frontend enthusiast in New York.
        </h1>
        <p className="text-white">
          I'm Luis, with a B.A in computer & technology. I am passionate
          about frontend engineering, empowering the community, and creating
          art through music and software.
        </p>
        <div className="text-white">social media icons</div>
      </div>
      <div className="absolute flex gap-5 overflow-hidden py-4 sm:gap-8 top-[450px] right-[180px]">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            01
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            02
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            03
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            04
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            05
          </div>
        </div>
    </div>
  );
}

export default App;
