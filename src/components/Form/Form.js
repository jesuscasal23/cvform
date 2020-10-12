import React, { useState } from "react";
import AnimatedButton from "../AnimatedButton/AnimatedButton"
import InputField from "../InputField/InputField"
import useHandleForm from "./FormHelper"
import useSubmitForm from "./submitForm"

import "./form.css";

const Form = () => {
  const {handleChange, education, workExperience, basicInfo} = useHandleForm()
  const {handleSubmit} = useSubmitForm()

  const renderInputFields = (state, formgroup) => {
    const InputNames = Object.keys(state)
    const InputFields = InputNames.map( (inputName) => {
      return (<InputField 
          value={state[inputName]}
          handleChange={handleChange} 
          label={inputName} 
          formgroup={formgroup}
          />
        )
    })
    return InputFields
  }

  return (
    <div className="container">
      <div className="login-box">

        <form onSubmit={(e) => handleSubmit(e, "basicInformation")} className="form">
          <h1>Tell us your story!</h1>
          {renderInputFields(basicInfo, "basicInfo")}
          < AnimatedButton name="basicInfo" text="submit basic information"/>
        </form>

        <form onSubmit={(e) => handleSubmit(e, "workExperience")} className="form">
          <h1>Work Experience</h1>
          {renderInputFields(workExperience, "workExperience")}
          < AnimatedButton name="workExperience" text="Submit Work experience"/>
        </form>

        <form onSubmit={(e) => handleSubmit(e, "education")} className="form">
          <h1> education </h1>
          {renderInputFields(education, "education")}
          < AnimatedButton name="education" text="Submit education Item"/>
        </form>
          {/* this button submits the form */}
      </div>
    </div>
  );
}

export default Form;
