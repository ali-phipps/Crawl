import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'

const Layout = (props) => (

  <div className='root'>
    <Head>
    <title>{props.titleName}</title>

        <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.css" >
        </link>

    <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY_CLIENT}&libraries=geometry,drawing,places`}></script>
    </Head>
     <Navbar/>
      {props.children}
      </div>
)

export default Layout;
