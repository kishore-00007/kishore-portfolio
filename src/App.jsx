import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Close menu on section click
    }
  };

  // Highlight active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentActive = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 font-inter text-gray-300 antialiased">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/90 shadow-lg shadow-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition duration-300">
            Kishore Suresh
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-teal-400 focus:outline-none focus:text-teal-400"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex items-center`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
              <li><NavLink icon={<Home size={18} />} text="Home" sectionId="home" activeSection={activeSection} onClick={scrollToSection} /></li>
              <li><NavLink icon={<User size={18} />} text="About" sectionId="about" activeSection={activeSection} onClick={scrollToSection} /></li>
              <li><NavLink icon={<Code size={18} />} text="Skills" sectionId="skills" activeSection={activeSection} onClick={scrollToSection} /></li>
              <li><NavLink icon={<Briefcase size={18} />} text="Projects" sectionId="projects" activeSection={activeSection} onClick={scrollToSection} /></li>
              <li><NavLink icon={<Mail size={18} />} text="Contact" sectionId="contact" activeSection={activeSection} onClick={scrollToSection} /></li>
            </ul>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg py-2">
            <ul className="flex flex-col space-y-2 px-6 pb-4">
              <li><NavLink icon={<Home size={18} />} text="Home" sectionId="home" activeSection={activeSection} onClick={scrollToSection} /></li>
              <li><NavLink icon={<User size={18} />} text="About" sectionId="about" activeSection={activeSection} onClick={scrollToSection} /></li>
              <li><NavLink icon={<Code size={18} />} text="Skills" sectionId="skills" activeSection={activeSection} onClick={scrollToSection} /></li>
              <li><NavLink icon={<Briefcase size={18} />} text="Projects" sectionId="projects" activeSection={activeSection} onClick={scrollToSection} /></li>
              <li><NavLink icon={<Mail size={18} />} text="Contact" sectionId="contact" activeSection={activeSection} onClick={scrollToSection} /></li>
            </ul>
          </div>
        )}
      </nav>

      <main className="pt-20">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

// NavLink Component
const NavLink = ({ icon, text, sectionId, activeSection, onClick }) => {
  const isActive = activeSection === sectionId;
  return (
    <a
      href={`#${sectionId}`}
      onClick={(e) => { e.preventDefault(); onClick(sectionId); }}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition duration-300
        ${isActive
          ? 'bg-teal-500/20 text-teal-300 font-semibold'
          : 'text-gray-300 hover:text-teal-400 hover:bg-gray-700/50'
        }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

// Hero Section
const HeroSection = ({ scrollToSection }) => (
  <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="150" fill="url(#paint0_radial)" />
        <circle cx="1300" cy="700" r="200" fill="url(#paint1_radial)" />
        <path d="M0 400C200 200 400 0 720 0C1040 0 1240 200 1440 400V800H0V400Z" fill="url(#paint2_linear)" />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(150)"><stop stopColor="#14B8A6" /><stop offset="1" stopColor="#14B8A6" stopOpacity="0" /></radialGradient>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1300 700) rotate(90) scale(200)"><stop stopColor="#0F766E" /><stop offset="1" stopColor="#0F766E" stopOpacity="0" /></radialGradient>
          <linearGradient id="paint2_linear" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse"><stop stopColor="#14B8A6" stopOpacity="0.1" /><stop offset="1" stopColor="#0F766E" stopOpacity="0.1" /></linearGradient>
        </defs>
      </svg>
    </div>
    <div className="relative z-10 text-center px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-up text-gray-100">
        Hi, I'm <span className="text-teal-400">Kishore Suresh</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-100 max-w-3xl mx-auto">
        Data Enthusiast | SQL Ninja | Power BI Creator | Google Certified | Turning complex data into powerful business insights.
      </p>
      <div className="space-x-4 animate-fade-in-up delay-200">
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="inline-flex items-center px-8 py-4 bg-teal-500 text-white font-bold rounded-full shadow-lg shadow-teal-500/30 hover:bg-teal-600 transform hover:scale-105 transition duration-300 ease-in-out group">
          View My Work
          <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="inline-flex items-center px-8 py-4 border-2 border-gray-400 text-gray-200 font-bold rounded-full shadow-lg hover:bg-gray-200 hover:text-gray-900 transform hover:scale-105 transition duration-300 ease-in-out">
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section id="about" className="py-24 bg-gray-800">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src="https://placehold.co/300x300/14B8A6/0F172A?text=KS"
            alt="Kishore Suresh Profile"
            className="rounded-full w-64 h-64 object-cover shadow-xl shadow-black/30 border-4 border-teal-500/50 transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-2/3 text-lg text-gray-300 leading-relaxed">
          <p className="mb-4">
            Passionate Data Analyst with hands-on expertise in SQL, Excel, Power BI, and data storytelling. I specialize in transforming complex datasets into clear, actionable insights that help businesses optimize performance and drive smarter decisions.
          </p>
          <p className="mb-4">
            My approach is grounded in a solid understanding of data analysis principles, demonstrated through projects like my end-to-end SQL analysis of the Northwind dataset, where I used advanced functions to uncover key business trends. I thrive on making data accessible and meaningful through powerful visualizations and dashboards.
          </p>
          <p>
            I believe in continuous learning and am always building on my practical, job-ready analytics skills. I'm open to data analyst roles where I can contribute insights that truly matter. Let’s connect if you’re looking for someone who understands not just <strong className="text-teal-400">how</strong> to write queries, but also <strong className="text-teal-400">why</strong> those insights are valuable.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Skills Section
const SkillsSection = () => {
  const skills = [
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'Power BI', icon: 'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/PNG/Power-BI-Desktop.png' },
    { name: 'Excel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/excel/excel-original.svg' },
    { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'DAX', icon: 'https://api.iconify.design/mdi/function-variant.svg?color=white' },
    { name: 'Power Query', icon: 'https://www.svgrepo.com/show/354224/power-query.svg' },
    { name: 'Data Viz', icon: 'https://api.iconify.design/mdi/chart-bar.svg?color=white' },
    { name: 'Data Cleaning', icon: 'https://api.iconify.design/mdi/broom.svg?color=white' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-16">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-teal-500/50 shadow-lg hover:shadow-teal-500/20 transform hover:-translate-y-2 transition-all duration-300 ease-in-out group"
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-16 h-16 mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/1F2937/14B8A6?text=?" }}
              />
              <p className="text-lg font-semibold text-gray-200 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Northwind Sales Performance Analysis',
      description: 'Conducted a comprehensive sales analysis using the Northwind dataset. Leveraged advanced SQL techniques (CTEs, Window Functions, Stored Procedures) to uncover key business insights on growth, top performers, and customer patterns.',
      technologies: ['SQL (MySQL)', 'MySQL Workbench', 'CTEs', 'Window Functions'],
      image: 'https://placehold.co/600x400/0F766E/FFFFFF?text=SQL+Analysis',
      liveLink: null,
      githubLink: 'https://github.com/kishore-00007/Northwind-SQL-Analysis',
    },
    {
      title: 'Airline On-Time Performance Dashboard',
      description: 'Developed a Power BI dashboard to analyze historical flight data, identifying key drivers of delays and cancellations. Features interactive KPIs, drill-through, and custom tooltips for deep exploration.',
      technologies: ['Power BI', 'Power Query', 'DAX', 'Excel'],
      image: 'https://placehold.co/600x400/D97706/FFFFFF?text=Power+BI+Dashboard',
      liveLink: 'https://my.novypro.com/kishore-suresh',
      githubLink: '#',
    },
    {
      title: 'Spotify Streaming History Dashboard',
      description: 'Built an interactive Power BI dashboard to provide deep insights into personal Spotify listening habits. Visualized total plays, listening time, top artists, skip rates, and temporal listening patterns.',
      technologies: ['Power BI', 'Power Query', 'DAX', 'JSON/CSV'],
      image: 'https://placehold.co/600x400/1DB954/0F172A?text=Spotify+Analytics',
      liveLink: 'https://my.novypro.com/kishore-suresh',
      githubLink: '#',
    },
    {
      title: 'Bellabeat Fitness Tracker Case Study',
      description: 'A Google Capstone project analyzing smart device usage for Bellabeat. Used R for data cleaning, transformation, and EDA to deliver insights on user behavior and inform marketing strategies.',
      technologies: ['R', 'RStudio', 'tidyverse', 'ggplot2', 'dplyr'],
      image: 'https://placehold.co/600x400/059669/FFFFFF?text=R+Case+Study',
      liveLink: null,
      githubLink: 'https://github.com/kishore-00007/bellabeat-case-study-R',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-16">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="bg-gray-800/50 rounded-xl shadow-lg overflow-hidden border border-gray-700 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 ease-in-out flex flex-col">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-56 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/1F2937/14B8A6?text=Project" }}
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-100 mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-teal-500/20 text-teal-300 text-sm font-medium px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 mt-auto pt-4">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300 shadow-md group">
            <ExternalLink size={18} className="mr-2 group-hover:rotate-6 transition-transform duration-300" /> Live Demo
          </a>
        )}
        {project.githubLink && project.githubLink !== '#' && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition duration-300 shadow-md group">
            <Github size={18} className="mr-2 group-hover:scale-110 transition-transform duration-300" /> GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

// Contact Section
const ContactSection = () => (
  <section id="contact" className="py-24 bg-gray-900">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Get In Touch</h2>
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
        <p className="text-lg text-gray-300 text-center mb-8">
          I'm open to Data Analyst roles and freelance opportunities. Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        <div className="text-center mb-10">
            <a href="mailto:kishore00007s@gmail.com" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transform hover:scale-105 transition duration-300">
                <Mail size={20} className="mr-2" /> Email Me
            </a>
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold text-gray-200 mb-4">Connect with me:</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/kishore-00007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transform hover:scale-125 transition-transform duration-300" aria-label="GitHub"><Github size={32} /></a>
            <a href="https://www.linkedin.com/in/kishore-s-ba52b72a5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transform hover:scale-125 transition-transform duration-300" aria-label="LinkedIn"><Linkedin size={32} /></a>
            <a href="https://my.novypro.com/kishore-suresh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transform hover:scale-125 transition-transform duration-300" aria-label="NovyPro Portfolio"><Briefcase size={32} /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 py-8 border-t border-gray-700">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Kishore Suresh. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Built with React & Tailwind CSS.
      </p>
    </div>
  </footer>
);

export default App;
