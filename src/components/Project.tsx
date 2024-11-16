
type ProjectProps = {
    imageUrl: string;
    title: string;
    description: string;
    repoUrl: string;
  };
  
  const Project = ({ imageUrl, title, description, repoUrl }: ProjectProps) => {
    return (
      <div className="project">
        <img src={imageUrl} alt={title} className="project-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    );
  };
  
  export default Project;