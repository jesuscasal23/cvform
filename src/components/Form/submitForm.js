import {useState} from "react"
import useHandleForm from "./FormHelper"

const useSubmitForm = () => {
  const {workExperience, basicInfo, education} = useHandleForm()
  const [cvData, setCvData] = useState({
    name: "",
    desiredPosition: "",
    workExperience: [],
    education: []
  })
  

  const handleSubmit = (e, infoGroup) => {
    e.preventDefault()
    
    if(infoGroup === "basicInformation") {
      setCvData((prevState) => {
        return { ...prevState,
          name: basicInfo.name,
          desiredPosition: basicInfo.desiredPosition,
        }})
      }
      
    if(infoGroup === "workExperience") {
      const workExperienceObject = {
        company: workExperience.company,
        startedWorking: workExperience.startedWorking,
        endDate: workExperience.endDate
      }   

      setCvData( (prevState) => {
        const newState = prevState
        newState.workExperience.push(workExperienceObject)
        return prevState
      })
    }

    if(infoGroup === "education") {
      
    }

    console.log(cvData)
  };

  return {handleSubmit}
}

export default useSubmitForm