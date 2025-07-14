import { Code, Layers, Hammer } from "lucide-react";

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 pt-10">My Skillset</h1>
        <p className="text-gray-200 max-w-2xl mx-auto mb-14 pt-5">
          A blend of clean code, modern frameworks, and practical tools used to build efficient, scalable web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pt-10">

          {/* Languages */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">Languages</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">Building solid foundations with modern coding languages.</p>
            <ul className="text-sm text-white/90 text-left space-y-1 mb-4">
              <li>- JavaScript</li>
              <li>- TypeScript</li>
              <li>- Python</li>
              <li>- C/C++</li>
              <li>- HTML5 & CSS3</li>
            </ul>
            <a href="#" className="text-red-400 text-sm hover:underline">Read More</a>
          </div>

          {/* Frameworks */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Layers className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">Frameworks & Libraries</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">Developing responsive UIs using powerful modern libraries.</p>
            <ul className="text-sm text-white/90 text-left space-y-1 mb-4">
              <li>- React.js</li>
              <li>- Next.js</li>
              <li>- Tailwind CSS</li>
              <li>- Bootstrap</li>
              <li>- Streamlit</li>
            </ul>
            <a href="#" className="text-red-400 text-sm hover:underline">Read More</a>
          </div>

          {/* Tools */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Hammer className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">Tools & Platforms</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">From code to deployment, using the best tools in tech.</p>
            <ul className="text-sm text-white/90 text-left space-y-1 mb-4">
              <li>- Git & GitHub</li>
              <li>- VS Code</li>
              <li>- Canva</li>
              <li>- Vercel / Heroku</li>
              <li>- Firebase (Basics)</li>
            </ul>
            <a href="#" className="text-red-400 text-sm hover:underline">Read More</a>
          </div>

        </div>
      </div>
    </section>
  );
}
