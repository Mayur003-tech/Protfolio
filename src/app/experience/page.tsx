export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#375094] to-[#495057] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-5 mb-10">Experience</h1>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white/30 z-0" />

          {/* Timeline cards */}
          <div className="flex flex-col space-y-13 relative z-10">

            {/* Card 1 - Left */}
            <div className="md:flex md:justify-start md:items-center relative group">
              <div className="md:w-1/2 w-full md:pr-10 mb-6 md:mb-0 relative">
                {/* horizontal line */}
                <div className="hidden md:block absolute top-1/2 right-[0px] w-10 h-[2px] bg-white/40 z-10" />
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300">
                  <h2 className="text-xl font-bold mb-1">Web Developer Intern</h2>
                  <p className="text-sm text-gray-200 mb-3">InternPro • May 2025 – Present</p>
                  <p className="text-white text-base leading-relaxed">
                    Currently developing a full-stack web application using modern technologies. Responsible for both frontend and backend development, collaborating with the team to build scalable, user-friendly features and optimize performance.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2" />
            </div>

            {/* Card 2 - Right */}
            <div className="md:flex md:justify-end md:items-center relative group">
              <div className="hidden md:block w-1/2 relative">
                {/* horizontal line */}
                <div className="absolute top-1/2 right-[-40px] w-10 h-[2px] bg-white/40 z-10" />
              </div>
              <div className="md:w-1/2 w-full md:pl-10">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300">
                  <h2 className="text-xl font-bold mb-1">IEEE-CIS GHRCE ,ChairPerson</h2>
                  <p className="text-sm text-gray-200 mb-3">•G H Raisoni College Of Engineering , Nagpur <br /> •Oct 2024 – Present</p>
                  <p className="text-white text-base leading-relaxed">
                   Leading the IEEE Computational Intelligence Society at GHRCE, overseeing the planning and execution of AI/ML-focused events and workshops. Managing a team of volunteers, fostering student engagement, and driving the chapters technical growth and outreach.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Left */}
            <div className="md:flex md:justify-start md:items-center relative group">
              <div className="md:w-1/2 w-full md:pr-10 mb-6 md:mb-0 relative">
                {/* horizontal line */}
                <div className="hidden md:block absolute top-1/2 right-[0px] w-10 h-[2px] bg-white/40 z-10" />
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300">
                  <h2 className="text-xl font-bold mb-1">Frontend Developer</h2>
                  <p className="text-sm text-gray-200 mb-3">•SS Infotech <br /> •May2024 – Oct 2024</p>
                  <p className="text-white text-base leading-relaxed">
                    Worked on developing a medical consultant website for a client, focusing on responsive UI and user experience. Gained hands-on experience in frontend technologies while collaborating with the team to deliver a functional and professional web solution.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2" />
            </div>
            {/* Card 4 - Right */}
            <div className="md:flex md:justify-end md:items-center relative group">
              <div className="hidden md:block w-1/2 relative">
                {/* horizontal line */}
                <div className="absolute top-1/2 right-[-40px] w-10 h-[2px] bg-white/40 z-10" />
              </div>
              <div className="md:w-1/2 w-full md:pl-10">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300">
                  <h2 className="text-xl font-bold mb-1">IEEE-CIS GHRCE ,Volunteer</h2>
                  <p className="text-sm text-gray-200 mb-3">•G H Raisoni College Of Engineering , Nagpur <br /> •Sep 2023 – Sep 2024</p>
                  <p className="text-white text-base leading-relaxed">
                    Assisted in organizing technical events, workshops, and coding competitions under the IEEE Computational Intelligence Society at GHRCE. Contributed to event promotion, logistics, and participant coordination while enhancing teamwork and leadership skills.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
