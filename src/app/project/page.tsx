import Image from "next/image";

export default function Project() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#ACCBE1] to-[#C0C7CE] text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center md:mb-16 md:pt-5 mb-5">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Project Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl hover:scale-[1.02] duration-300">
            <Image
              src="/png/MyntraCloneImg.png"
              alt="AI Project"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-bold mb-1">Myntra Clone</h2>
                <p className="text-sm text-gray-200 mb-3">•May 2024</p>
                <p className="text-white text-base leading-relaxed">
                 Developed a responsive front-end clone of the Myntra website using HTML, CSS, and JavaScript. Replicated core UI components like the homepage, product listings, and navigation bar. Showcases strong frontend design and layout skills.
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href=" https://mayur003-tech.github.io/Myntra-Clone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold text-white text-sm"
                >
                  Live Website
                </a>
                <a
                  href="https://github.com/Mayur003-tech/Myntra-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gray-200 text-gray-900 hover:bg-white transition font-semibold text-sm"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          
          {/* Project Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl hover:scale-[1.02] duration-300">
            <Image
              src="/png/Protfolio_img.png"
              alt="Portfolio Website"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-bold mb-1">Personal Portfolio Website</h2>
                <p className="text-sm text-gray-200 mb-3">Self-Initiated • Aug 2024</p>
                <p className="text-white text-base leading-relaxed">
                  Designed and developed a responsive personal portfolio using HTML, CSS, and JavaScript. Showcases my skills, projects, and experience in a clean, professional layout. Deployed the website using Firebase Hosting for fast and reliable access.
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://mayur-portfolio-68e11.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold text-white text-sm"
                >
                  Live Website
                </a>
                <a
                  href="https://github.com/Mayur003-tech/mayur-protfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gray-200 text-gray-900 hover:bg-white transition font-semibold text-sm"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl hover:scale-[1.02] duration-300">
            <Image
              src="/png/MovieRecommendetion.jpg"
              alt="Movie Recommendation System"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-bold mb-1">Movie Recommendation System</h2>
                <p className="text-sm text-gray-200 mb-3">Self-Initiate •Feb 16</p>
                <p className="text-white text-base leading-relaxed">
                  Built an interactive movie recommendation web app using Streamlit, implementing collaborative and content-based filtering. Leveraged the TMDB dataset for movie metadata and user preference analysis.
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/Mayur003-tech/Movie_recommender_sys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold text-white text-sm"
                >
                  GitHub Repo
                </a>
                <a
                  href="https://mayur003-tech.github.io/Movie_recommender_sys/"
                  target="_blank"
                  rel=""
                  className="px-4 py-2 rounded-full bg-gray-200 text-gray-900 hover:bg-white transition font-semibold text-sm"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>

          {/* card 4 */}

           <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl hover:scale-[1.02] duration-300">
            <Image
              src="/png/Typing_img.png"
              alt="Portfolio Website"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-bold mb-1">Personal Portfolio Website</h2>
                <p className="text-sm text-gray-200 mb-3">Self-Initiated • Ongoing</p>
                <p className="text-white text-base leading-relaxed">
                  Built a responsive portfolio using Next.js, Tailwind CSS, and TypeScript. Features sections for skills, experience, and projects.
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://your-portfolio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold text-white text-sm"
                >
                  Live Website
                </a>
                <a
                  href="https://github.com/your-portfolio-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gray-200 text-gray-900 hover:bg-white transition font-semibold text-sm"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
