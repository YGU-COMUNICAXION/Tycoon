import React from 'react'
import Layout from '../components/layout'
import NavMarcas from "../components/nav-marcas"

const brandsPage = () => {
  return (
    <Layout>
        <div className='MainDiv'>
            <div className='brandsFirstSection'></div>
            <div className='brandsSecondSection'>
                <NavMarcas/>
            </div>
        </div>
    </Layout>
  )
}

export default brandsPage
