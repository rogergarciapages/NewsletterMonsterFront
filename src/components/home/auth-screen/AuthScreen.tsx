import React from 'react'
import HeroSection from './HeroSection'
import { TodaysHighlight } from './TodaysHighlight'

const AuthScreen = () => {
  return (
    <div className="flex flex-col">
        <HeroSection />
        <TodaysHighlight />

        
    
    </div>
  )
}

export default AuthScreen