// import React, { useEffect } from 'react'
// import useAsyncFn from '../../hooks/useAsyncFn'
// import { useRecoilState } from 'recoil'
// import { companies as recoilCompanies } from '../../Recoil/atoms'
// import { fetchCompanies } from '../../helpers/api'
// import Dashboard from './Dashboard'
// import Loading from '../misc/Loading'

// const DashboardContainer = () => {
//   const [companies, setCompanies] = useRecoilState(recoilCompanies)
//   const {
//     loading,
//     error,
//     data,
//     executeFn: getCompanies
//   } = useAsyncFn(fetchCompanies)

//   useEffect(() => {
//     setCompanies({ ...companies, loading: true })
//     getCompanies()
//     // eslint-disable-next-line
//   }, [])

//   useEffect(() => {
//     if (!loading && data) setCompanies({ ...companies, loading: false, data })
//     // eslint-disable-next-line
//   }, [loading, data])

//   if (loading) return <Loading />
//   if (error) return <div>Could not fetch this data</div>
//   return (
//     <Dashboard companies={data} />
//   )
// }

// export default DashboardContainer

import React from 'react'

const DashboardContainer = () => {
  return (
    <div>
      Welcome to the Dashboard
    </div>
  )
}

export default DashboardContainer
