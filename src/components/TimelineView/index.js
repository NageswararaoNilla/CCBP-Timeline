import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  //   const titles = timelineItemsList.map(eachItem => eachItem.title)
  //   console.log(timelineItemsList)
  return (
    <div className="app-container">
      <div className="timeline-container">
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
            {timelineItemsList.map(eachItem =>
              eachItem.categoryId === 'COURSE' ? (
                <CourseTimelineCard
                  courseDetails={eachItem}
                  key={eachItem.id}
                  title={eachItem.title}
                />
              ) : (
                <ProjectTimelineCard
                  projectDetails={eachItem}
                  key={eachItem.id}
                />
              ),
            )}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimelineView
