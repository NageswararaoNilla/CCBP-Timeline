import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  console.log(projectDetails)
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div>
      <img src={imageUrl} alt="project" className="project-img" />

      <div>
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} target="_blank" rel="noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
