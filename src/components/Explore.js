import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Explore = () => {
  const dataframe = useSelector(state => state.dataframe)

  useEffect(() => {
    dataframe["SystolicBP"].plot("plot_div").line()
    
  })

  return (
    
    <>
      <div>Explore</div>
      <div id="plot_div"></div>
    </>

  )
}

export default Explore