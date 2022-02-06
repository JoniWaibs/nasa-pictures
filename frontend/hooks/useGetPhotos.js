// import React, { useEffect } from 'react'
// const { useContext, useState } = React

// import context from '../context/AppContext'
// const { AppContext } = context;

// import { Service as ApiService } from '../services'


// const useGetPhotos = async ({page}) => {
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(async () => {
//     const apiCall = async () =>{
//       const params = {page}
//       setIsLoading(true)
//       try {
//         const { data } = await new ApiService(params).getPictures()
//         console.log('executing')
//       } catch (error) {
//       } finally {
//         setIsLoading(false)
//       }
//     }
//     apiCall()
//   }, [page])

//   return () => {
//     useGetPhotos
//   }
// }

// export default useGetPhotos;
