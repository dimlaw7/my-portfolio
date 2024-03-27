const Achievements = () => {
  return (
    <section className="services overflow-x-hidden bg-[rgb(19,22,38)]">
      <div className="container mx-auto">
        <div className="wrap h-screen">
          <div className="title py-8">
            <h1
              data-aos="fade-up"
              className="bg-title-decor bg-bottom bg-no-repeat pb-4 text-center text-2xl font-black uppercase lg:text-5xl"
            >
              Achievements
            </h1>
          </div>
          <div className="content flex h-[500px] gap-4 lg:flex-row">
            <ul className="left relative w-full">
              <li className="absolute -top-2 left-2/4 translate-x-[-125%]">
                <div className="tile">
                  <div className="tile__outer">
                    <div className="tile__inner">
                      <h1>Title1</h1>
                      <p>Hello World</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="absolute -top-2 left-0">
                <div className="tile">
                  <div className="tile__outer">
                    <div className="tile__inner">
                      <h1>Title2</h1>
                      <p>Hello World</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="absolute left-1/4 top-2/4 -translate-x-3/4">
                <div className="tile">
                  <div className="tile__outer">
                    <div className="tile__inner">
                      <h1>Title3</h1>
                      <p>Hello World</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="absolute -top-2 right-2/4 translate-x-[125%]">
                <div className="tile">
                  <div className="tile__outer">
                    <div className="tile__inner">
                      <h1>Title1</h1>
                      <p>Hello World</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="absolute -top-2 right-0">
                <div className="tile">
                  <div className="tile__outer">
                    <div className="tile__inner">
                      <h1>Title2</h1>
                      <p>Hello World</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="absolute right-1/4 top-2/4 translate-x-3/4">
                <div className="tile">
                  <div className="tile__outer">
                    <div className="tile__inner">
                      <h1>Title3</h1>
                      <p>Hello World</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
