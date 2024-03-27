import LetsTalkBtn from "./utils/LetsTalkBtn";

const Bio = () => {
  return (
    <section className="Bio bg-hero-pattern-up">
      <div className="container mx-auto">
        <div className="wrap">
          <div className="sect-title py-8">
            <h1
              data-aos="fade-up"
              className="bg-title-decor bg-bottom bg-no-repeat pb-4 text-center text-2xl font-black uppercase lg:text-5xl"
            >
              Who Am I?
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="left min-h-96 lg:w-1/2">
              <h2 className="my-8 text-center text-2xl font-black uppercase lg:text-left lg:text-5xl">
                Hey There, I am Lawal Oladimeji
              </h2>
              <p className="text-center leading-8 text-[#606580] lg:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                exercitationem assumenda eveniet aliquam rerum ad tempora iste
                odio? In dolorum iure illo earum vero rerum dolor obcaecati
                illum libero neque.
              </p>
              <LetsTalkBtn
                width="w-[300px]"
                fontSize="text-base my-8"
                title="Download CV"
                icon={true}
              />
            </div>
            <div className="right grid grid-cols-[repeat(2,_minmax(0,_200px))] justify-around gap-8 p-8 lg:w-1/2">
              <div className="about-box flex flex-col items-center justify-center rounded-lg bg-[rgb(52,58,91,0.6)] p-8">
                <h1 className="text-center text-2xl font-black uppercase lg:text-5xl">
                  5<sup>+</sup>
                </h1>
                <p>Years Experience</p>
              </div>
              <div className="about-box flex flex-col items-center justify-center rounded-lg bg-[rgb(52,58,91,0.6)] p-8">
                <h1 className="text-center text-2xl font-black uppercase lg:text-5xl">
                  5<sup>+</sup>
                </h1>
                <p>Years Experience</p>
              </div>
              <div className="about-box flex flex-col items-center justify-center rounded-lg bg-[rgb(52,58,91,0.6)] p-8">
                <h1 className="text-center text-2xl font-black uppercase lg:text-5xl">
                  5<sup>+</sup>
                </h1>
                <p>Years Experience</p>
              </div>
              <div className="about-box flex flex-col items-center justify-center rounded-lg bg-[rgb(52,58,91,0.6)] p-8">
                <h1 className="text-center text-2xl font-black uppercase lg:text-5xl">
                  5<sup>+</sup>
                </h1>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
