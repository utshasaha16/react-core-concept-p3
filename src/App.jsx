
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import CustomHookForm from './components/CustomHookForm/CustomHookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  const handleSignUpSubmit = data => {
    console.log('sing up data', data);
}
const handleProfileUpdate = data => {
    console.log('update profile', data);
}

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}
      <ReusableForm 
      formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please Sing Up Right Now</p>
        </div>
      </ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'} 
      submitBtnText={'Update'} 
      handleSubmit={handleProfileUpdate}>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your Profile Updated</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
