import { useState } from 'react'
import { Menu, X, Linkedin, Mail, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "KidsCare Mobile App",
    description: "Developed a mobile app to manage children's medical records and vaccination schedules. Built an admin dashboard to manage user accounts and handle data effectively.",
    technologies: ["React Native", "NestJS", "MongoDB"],
    github: "https://github.com/yourusername/kidscare",
    demo: null,
  },
  {
    title: "Sri Lanka Travel Guide",
    description: "Created a responsive website featuring Sri Lanka's beautiful tourist destinations and hotel listings for travelers.",
    technologies: ["ReactJS"],
    github: "https://github.com/yourusername/srilanka-travel",
    demo: null,
  },
]

const skills = [
  "JavaScript", "React", "React Native", "NestJS", "Node.js",
  "HTML", "CSS", "Tailwind CSS", "MongoDB", "MySQL",
  "Git", "GitHub", "RESTful APIs", "GraphQL"
]

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Shehan Sanjula</span>
                <img
                  className="h-10 w-auto"
                  src="/placeholder.svg?height=40&width=40"
                  alt="Your Logo"
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  About
                </a>
                <a href="#projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Projects
                </a>
                <a href="#skills" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Skills
                </a>
                <a href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Download CV
              </a>
            </div>
            <div className="ml-10 lg:hidden">
              <button
                type="button"
                className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 flex z-40">
            <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <X className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  <a
                    href="#about"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Cover image"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Shehan Sanjula</span>
                  <span className="block text-indigo-200">Full Stack Developer</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Passionate about creating elegant solutions to complex problems. Experienced in React, NestJS, and more.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#contact"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      Contact Me
                    </a>
                    <a
                      href="#projects"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <div id="about" className="relative bg-white py-16 sm:py-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/placeholder.svg?height=600&width=400"
                    alt="Your profile"
                  />
                  <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                  <div className="relative px-8">
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <p className="relative">
                          Passionate about creating elegant solutions to complex problems.
                        </p>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                  About Me
                </h2>
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-lg">
                    I'm a passionate Full Stack Developer with experience in building web and mobile applications.
                    My journey in tech started with a curiosity about how things work, which led me to pursue a
                    career in software development.
                  </p>
                  <p className="text-lg">
                    I specialize in JavaScript technologies across the stack, with a strong focus on React for
                    front-end development and Node.js (particularly NestJS) for back-end services. I'm also experienced
                    in working with databases like MongoDB and MySQL.
                  </p>
                  <p className="text-lg">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing my knowledge through blog posts and mentoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div id="projects" className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div className="relative">
            <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Portfolio</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                My Projects
              </p>
              <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                Here are some of the projects I've worked on. Each one presented unique challenges and opportunities for learning.
              </p>
            </div>
            <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
              {projects.map((project) => (
                <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="/placeholder.svg?height=200&width=400" alt={project.title} />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <span className="hover:underline">{project.technologies.join(', ')}</span>
                      </p>
                      <a href={project.github} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                        <p className="mt-3 text-base text-gray-500">{project.description}</p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a  href={project.github}>
                          <span className="sr-only">GitHub</span>
                         
                        </a>
                      </div>
                      {project.demo && (
                        <div className="ml-3">
                          <a href={project.demo} className="flex items-center text-sm font-medium text-indigo-600 hover:underline">
                            <span>View Demo</span>
                            <ExternalLink className="ml-1 h-5 w-5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div id="skills" className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Skills</h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Technologies I Work With
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                Here are some of the technologies and tools I'm proficient in:
              </p>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                {skills.map((skill) => (
                  <div key={skill} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <p className="text-gray-400 hover:text-gray-500">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div id="contact" className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="divide-y-2 divide-gray-200">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Get in touch
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Email</h3>
                    <dl className="mt-2 text-base text-gray-500">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>your.email@example.com</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Social</h3>
                    <ul role="list" className="mt-2 flex space-x-6">
                      <li>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">GitHub</span>
                          
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <Linkedin className="h-6 w-6" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Send me a message
                </h2>
                <div className="mt-8 lg:mt-0 lg:col-span-2">
                  <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                        Full name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          autoComplete="name"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; 2024 Shehan Sanjula. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}