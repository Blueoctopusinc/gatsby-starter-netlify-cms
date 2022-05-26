import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import Navbar from '../../components/Navbar'

const NavbarPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
        <Navbar openingTimes={data.openingTimes} openingDates={data.openingDates}/>
    //   <IndexPageTemplate
    //     image={getAsset(data.image)}
    //     title={data.title}
    //     heading={data.heading}
    //     subheading={data.subheading}
    //     description={data.description}
    //     intro={data.intro || { blurbs: [] }}
    //     mainpitch={data.mainpitch || {}}
    //   />
    )
  } else {
    return <div>Loading...</div>
  }
}

NavbarPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default NavbarPagePreview
