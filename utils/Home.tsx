import Image from "next/image";
import BackButton from "./BackButton";

function Home() {
  const projects = [
    { name: '25 + 5 Clock', link: '/pomodoro' },
    { name: 'Calculator', link: '/calculator' },
    { name: 'Drum Machine', link: '/drum-machine' },
    { name: 'Markdown Previewer', link: '/markdown-previewer' },
    { name: 'Random Quote Machine', link: '/random-quote-machine' },
    { name: 'Portfolio Webpage', link: '/portfolio' },
    { name: 'Product Landing Page', link: '/product-landing' },
    { name: 'Documentation', link: '/documentation' },
    { name: 'Tribute Page', link: '/tribute-page' },
    { name: 'Survey Form', link: '/survey-form' },
  ];
  return (
    <>
      <main className="w-full flex flex-col bg-black text-white justify-center h-full items-center gap-4">
        <BackButton />
        <Image
          src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
          className="bg-white rounded-md p-2"
          alt='free-code-camp'
          width={300}
          height={100}
        />
        <h1 id="title" className="font-bold text-4xl">
          Certification Projects
        </h1>
        <p id="description" className="font-light text-xl">
          by Milan Vala
        </p>
        <section className="grid grid-cols-2 gap-6">
          {projects.map((e) => {
            return (
              <div key={e.name}>
                <a
                target="_blank"
                  className="button hover:bg-blue-800 hover:text-white"
                  href={e.link}
                >
                  {e.name} &#8594;
                </a>
              </div>
            );
          })}
        </section>

        <footer className="text-xl font-semibold fixed bottom-0 right-0 underline px-8 py-4 border-t border-l border-white ">
          Source Code
        </footer>
      </main>
    </>
  );
}
export default Home;
