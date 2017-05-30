import React from 'react'
// import AppRight from './app_right'
import VoiceList from '../containers/voice_list'
import NewVoiceBtn from './new_voice_btn'

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  minHeight: 524,
  padding: "12px 32px",
  margin: '24 auto',
}

const AppContent = () => (
  <main style={style}>
    <NewVoiceBtn />
    <VoiceList />
  </main>
)

export default AppContent