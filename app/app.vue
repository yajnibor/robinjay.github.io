<template>
  <div class="portfolio">
    <header class="header">
      <nav class="nav">
        <h1 class="logo">Your Name</h1>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1 class="hero-title">Hi, I'm [Your Name]</h1>
        <p class="hero-subtitle">Full Stack Developer & Designer</p>
        <a href="#projects" class="cta-button">View My Work</a>
      </section>

      <section id="about" class="section">
        <h2>About Me</h2>
        <p>I'm a passionate developer who loves building beautiful and functional web applications. </p>
      </section>

      <section id="projects" class="section">
        <h2>Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <h3>Project 1</h3>
            <p>Description of your amazing project</p>
            <a href="#" class="project-link">View Project →</a>
          </div>
          <div class="project-card">
            <h3>Project 2</h3>
            <p>Another cool project you've built</p>
            <a href="#" class="project-link">View Project →</a>
          </div>
          <div class="project-card">
            <h3>Project 3</h3>
            <p>One more awesome project</p>
            <a href="#" class="project-link">View Project →</a>
          </div>
        </div>
      </section>

      <section id="contact" class="section">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <a href="mailto:your.email@example. com" class="cta-button">Contact Me</a>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 Your Name. Built with Nuxt.js</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
}

.portfolio {
  min-height: 100vh;
}

/* Header & Navigation */
.header {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #2563eb;
}

/* Hero Section */
.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem;
  text-align: center;
}

.hero-title {
  font-size: 3. 5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  background: #2563eb;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
}

/* Sections */
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.project-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2563eb;
}

. project-link {
  display: inline-block;
  margin-top: 1rem;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

/* Footer */
.footer {
  background: #1e293b;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
}

/* Responsive */
@media (max-width: 768px) {
  . hero-title {
    font-size: 2. 5rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
}
</style>