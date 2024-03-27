export default function About() {
  return (
    <div className="flex content-center w-full shadow my-24">
      <section className="w-full">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 w-full ">
          <div className=" lg:mt-0 lg:col-span-5 flex justify-center">
            <img
              className="rounded-lg"
              src="https://avatars.githubusercontent.com/u/99524749?v=4"
              alt="mockup"
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7 lg:order-first">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white pt-4">
              Clayton Guerrero
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              My name is Clay and I am a web developer from the Houston area.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
