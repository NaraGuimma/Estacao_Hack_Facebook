import React from 'react';
import Categories from './Categories'
import Amount from './Amount'
import Value from './Value'
import Heading from './Heading'
import Users from './Users'
import Last from './Last'

function Pagecontent() {
  return (
    <div className="container-fluid">

      {/* <!-- Page Heading --> */}
      <Heading />

      {/* <!-- Content Row --> */}
      <div className="row">

        {/* <!-- Amount of Products in DB --> */}
        <Amount />

        {/* <!-- $$$ of all products in DB --> */}
        <Value />

        {/* <!-- Amount of users in DB --> */}
        <Users />
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Last Product in DB --> */}
        <Last />

        {/* <!-- Categories in DB --> */}
        <Categories />
      </div>
    </div>
  )
}
export default Pagecontent;