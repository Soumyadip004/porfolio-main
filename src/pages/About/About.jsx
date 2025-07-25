import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Data Scientist, AI Engineer & Lifelong Learner
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Soumyadip Chanda,a data scientist and AI enthusiast passionate about transforming data into real-world impact.
                With a background in Python, machine learning, and NLP, I love exploring patterns, building predictive models, and designing AI-driven applications.{" "}
                <span className="font-bold text-white">
                 My journey blends analytical thinking with creativity — from data wrangling and visualization to deploying ML models using FastAPI, Streamlit, and cloud tools.
                I'm especially excited about generative AI, large language models, and how they’re shaping the future of human-computer interaction.
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              {/* <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p> */}

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I believe great data science isn't just about algorithms —
                    it's about storytelling, curiosity, and creating tools that help people make better decisions.
                    My mission is to keep learning, sharing, and building solutions that bridge data and human insight.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Soumyadip Chanda, Data Scientist & AI Engineer
                    </cite>
                    <div className="flex items-center gap-2">
                      {/* <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      /> */}
                      <span className="text-white"></span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
