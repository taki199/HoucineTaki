const TechStack = () => {
  const stackTech = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Git",
    "SQL",
    "MongoDB",
    "Python",
    "Docker",
    "AWS",
    "TypeScript",
    "GraphQL",
    "Redux",
    "Webpack",
    "Babel",
    "Jest",
    "Cypress",
    "CI/CD",
    "Kubernetes",
    "Terraform",
    "Serverless",
    "Next.js",
    "Gatsby",
  ];

  return (
    <section className="app-container ">
      <h1 className="hero_tag text-gray_gradient ">My Tech Stack</h1>
      <div className="scrolling-container">
        <div className="scrolling-text left-to-right">
          {stackTech.map((stack, index) => (
            <span key={index} className="tech-item">
              {stack}
            </span>
          ))}
        </div>
        <div className="scrolling-text right-to-left">
          {stackTech.map((stack, index) => (
            <span key={index} className="tech-item">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
