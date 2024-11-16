import Project from './Project';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio-container">

        <Project
          imageUrl="/readmepic.webp"
          title="README Generator"
          description="Generates a README.md file for new projects."
          repoUrl="https://github.com/acgianesi/README-Generator"
        />

        <Project
          imageUrl="/employeetrackerpic.png"
          title="Employee Tracker"
          description="The Employee Tracker is a command-line application designed to manage a company's employee database using Node.js, Inquirer, and PostgreSQL."
          repoUrl="https://github.com/acgianesi/Employee-Tracker"
        />

        <Project
          imageUrl="/vehiclebuilder.webp"
          title="Vehicle Builder"
          description="Vehicle-Builder is a command-line application that enables users to create or select vehicles—specifically cars, trucks, and motorbikes—and perform a variety of actions with them."
          repoUrl="https://github.com/acgianesi/Vehicle-Builder"
        />

        <Project
          imageUrl="/reactapp.png"
          title="Roundhouse Jokes"
          description="Roundhouse Jokes is your go-to app for an endless supply of laughs!"
          repoUrl="https://github.com/MCFoster007/ROUNDHOUSEJOKES"
        />

        <Project
          imageUrl="/placeholder.png"
          title="Project Five"
          description="A description of Project Five."
          repoUrl="https://github.com/acgianesi"
        />

        <Project
          imageUrl="/placeholder.png"
          title="Project Six"
          description="A description of Project Six."
          repoUrl="https://github.com/acgianesi"
        />
      </div>
    </section>
  );
};

export default Portfolio;