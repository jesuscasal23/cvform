import {useState} from "react"

const useHandleForm = () => {

  const [basicInfo, setbasicInfo] = useState({
    name: "",
    desiredPosition: "",
  });

  const [workExperience, setWorkExperience] = useState({
    company: "",
    startedWorking: "",
    endDate: ""
  })

  const [education, setEducation] = useState({
    education: "", 
    startingDate: "", 
    endDate: "" 
  })

  const handleChange = (e, group) => {
    const { name, value} = e.currentTarget;
    if(group === "basicInfo") {
      setbasicInfo((prevState) => {
        return { ...prevState, [name]: value };
      });
    }
    
    if(group === "workExperience") {
      setWorkExperience((prevState) => {
        return { ...prevState, [name]: value };
      });
    }
  
    if(group === "education") {
      setEducation((prevState) => {
        return { ...prevState, [name]: value };
      });
    }
  };

  return {handleChange, education, workExperience, basicInfo}
}

export default useHandleForm