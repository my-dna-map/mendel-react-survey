import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Group from '../Group'
const Section = (props) => {
  const { section } = props
  const { description, groups } = section
  if (!section) {
    return <></>
  }

  return (
    <div>
      <p className="align-justify p-1">
        {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      </p>
      {groups &&
        Object.entries(groups).map((group, index) => {
          group[1].label = group[1].label || group[0]
          return <Group key={`group.${group[1].label}.${index}`} group={group[1]} />
        })}
    </div>
  )
}
Section.propTypes = {
  /** number prop */
  question: PropTypes.object,
}
Section.defaultProps = {
  question: null,
}
export default Section
