import React from 'react';
import './Forms.css';

// export default function Home() {
//     return (
//       <form style={{ paddingLeft: "10px", paddingTop: "12px" }}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="form-control name"
//             id="name"
//             aria-describedby="nameHelp"
//             placeholder="Enter Your Name"
//           />
//           <small id="nameHelp" className="form-text text-muted">
//             We will never share your details with anyone else.
//           </small>
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="age">Age</label>
//           <input
//             type="number"
//             className="form-control age"
//             id="age"
//             aria-describedby="ageHelp"
//             placeholder="Enter Your Age"
//             min="1"
//             max="10"
//           />
//           <small id="ageHelp" className="form-text text-muted">
//             We will never share your details with anyone else.
//           </small>
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="gender">Gender</label>
//           <div className="custom-control custom-radio custom-control-inline">
//             <input
//               type="radio"
//               id="male"
//               name="gender"
//               className="custom-control-input"
//             />
//             <label
//               className="custom-control-label"
//               htmlFor="male"
//             >
//               Male
//             </label>
//           </div>
//           <div className="custom-control custom-radio custom-control-inline">
//             <input
//               type="radio"
//               id="female"
//               name="gender"
//               className="custom-control-input"
//             />
//             <label
//               className="custom-control-label"
//               htmlFor="female"
//             >
//               Female
//             </label>
//           </div>
//         </div>
        
//         <div className="questions">
//           <p style={{ fontWeight: "bolder", fontSize: "16px" }}>
//             Enter Your LifeStyle Details as described Below
//           </p>

//           <div className="form-group">
//             <label htmlFor="sports">Enter time spent On Sports By You (in hours)</label>
//             <input
//               type="number"
//               className="form-control sports"
//               id="sports"
//               aria-describedby="sportsHelp"
//               placeholder="Please enter here (numerical only)"
//               min="0"
//               max="24"
//             />
//             <small id="sportsHelp" className="form-text text-muted"></small>
//           </div>

//           <div className="form-group">
//             <label htmlFor="reading">Enter time spent On Reading By You (in hours)</label>
//             <input
//               type="number"
//               className="form-control reading"
//               id="reading"
//               aria-describedby="readingHelp"
//               placeholder="Please enter here (numerical only)"
//               min="0"
//               max="24"
//             />
//             <small id="readingHelp" className="form-text text-muted"></small>
//           </div>

//           <div className="form-group">
//             <label htmlFor="games">Enter time spent On Video games By You (in hours)</label>
//             <input
//               type="number"
//               className="form-control games"
//               id="games"
//               aria-describedby="gamesHelp"
//               placeholder="Please enter here (numerical only)"
//               min="0"
//               max="24"
//             />
//             <small id="gamesHelp" className="form-text text-muted"></small>
//           </div>

//           <div className="form-group">
//             <label htmlFor="study">Enter time spent On Studying (in hours)</label>
//             <input
//               type="number"
//               className="form-control study"
//               id="study"
//               aria-describedby="studyHelp"
//               placeholder="Please enter here (numerical only)"
//               min="0"
//               max="24"
//             />
//             <small id="studyHelp" className="form-text text-muted"></small>
//           </div>

//           <div className="form-group">
//             <label htmlFor="tv">Enter time spent On Watching TV (in hours)</label>
//             <input
//               type="number"
//               className="form-control tv"
//               id="tv"
//               aria-describedby="tvHelp"
//               placeholder="Please enter here (numerical only)"
//               min="0"
//               max="24"
//             />
//             <small id="tvHelp" className="form-text text-muted"></small>
//           </div>
//         </div>

//         {/* New questions about Myopia */}
//         <div className="form-group">
//           <label htmlFor="motherMyopia">Does your mother have myopia?</label>
//           <div className="custom-control custom-radio custom-control-inline">
//             <input
//               type="radio"
//               id="motherMyopiaYes"
//               name="motherMyopia"
//               value="true"
//               className="custom-control-input"
//             />
//             <label
//               className="custom-control-label"
//               htmlFor="motherMyopiaYes"
//             >
//               Yes
//             </label>
//           </div>
//           <div className="custom-control custom-radio custom-control-inline">
//             <input
//               type="radio"
//               id="motherMyopiaNo"
//               name="motherMyopia"
//               value="false"
//               className="custom-control-input"
//             />
//             <label
//               className="custom-control-label"
//               htmlFor="motherMyopiaNo"
//             >
//               No
//             </label>
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="fatherMyopia">Does your father have myopia?</label>
//           <div className="custom-control custom-radio custom-control-inline">
//             <input
//               type="radio"
//               id="fatherMyopiaYes"
//               name="fatherMyopia"
//               value="true"
//               className="custom-control-input"
//             />
//             <label
//               className="custom-control-label"
//               htmlFor="fatherMyopiaYes"
//             >
//               Yes
//             </label>
//           </div>
//           <div className="custom-control custom-radio custom-control-inline">
//             <input
//               type="radio"
//               id="fatherMyopiaNo"
//               name="fatherMyopia"
//               value="false"
//               className="custom-control-input"
//             />
//             <label
//               className="custom-control-label"
//               htmlFor="fatherMyopiaNo"
//             >
//               No
//             </label>
//           </div>
//         </div>

//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="terms"
//           />
//           <label className="form-check-label" htmlFor="terms">
//             I agree to the terms and conditions
//           </label>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     );
// }
import { useState } from "react";
function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("Male");
  const [sports, setSports] = useState(0);
  const [reading, setReading] = useState(0);
  const [video, setVideo] = useState(0);
  const [study, setStudy] = useState(0);
  const [tv, setTV] = useState(0);
  const [mom,setMom] =useState(0);
  const [dad,setDad]=useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      age: age,
      gender: gender,
      time_sports: sports,
      time_reading: reading,
      time_video_games: video,
      time_studying: study,
      time_tv: tv,
      mom:mom,
      dad:dad
    };

    const url = "http://127.0.0.1:5000/create_survey";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json();
      alert(data.message);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ paddingLeft: "10px", paddingTop: "12px" }}
    >
      <div className="form-group">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          className="form-control name"
          id="name"
          value={name}
          aria-describedby="emailHelp"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We will never share your details with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Age </label>
        <input
          type="number"
          className="form-control age"
          id="age"
          aria-describedby="emailHelp"
          placeholder="Enter Your Age"
          min="0"
          max="10"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We will never share your details with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="gender" style={{ display: "block" }}>
          Gender
        </label>
        <div
          className="custom-control custom-radio custom-control-inline"
          style={{ alignItems: "center" }}
        >
          <input
            type="radio"
            id="customRadioInline1"
            name="customRadioInline1"
            onClick={() => setGender("Male")}
            className="custom-control-input"
          />
          <label
            name="male"
            className="custom-control-label"
            htmlFor="customRadioInline1"
          >
            Male
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            style={{backgroundColor: "white"}}
            id="customRadioInline2"
            name="customRadioInline1"
            className="custom-control-input"
            onClick={() => setGender("Female")}
          />
          <label
            className="custom-control-label"
            name="female"
            htmlFor="customRadioInline2"
          >
            Female
          </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onClick={() => {
              if(mom == 0)setMom(1);
              else setMom(0);
            }}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox1">
            Mother
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onClick={() => {
              if(dad == 0)setDad(1);
              else setDad(0);
            }}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox2">
            Father
          </label>
        </div>
      </div>
      <div
        className="questions"
        style={{ display: "flex", flexDirection: "column", rowGap: "12px" }}
      >
        <p style={{ fontWeight: "bolder", fontSize: "16px" }}>
          Enter Your LifeStyle Details as described Below{" "}
        </p>
        <div className="form-group">
          <label>Enter time spent On Sports By You (in hours)</label>
          <input
            type="number"
            value={sports}
            onChange={(e) => setSports(e.target.value)}
            className="form-control sports"
            id="exampleInputEmail1 sports"
            aria-describedby="emailHelp"
            placeholder="Please enter here(numerical only)"
            min="0"
            max="24"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label>Enter time spent On Reading By You (in hours)</label>
          <input
            value={reading}
            onChange={(e) => setReading(e.target.value)}
            type="number"
            className="form-control reading"
            id="exampleInputEmail1 reading"
            aria-describedby="emailHelp"
            placeholder="Please enter here(numerical only)"
            min="0"
            max="24"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label>Enter time spent On Video games By You (in hours)</label>
          <input
            type="number"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            className="form-control games"
            id="exampleInputEmail1 games"
            aria-describedby="emailHelp"
            placeholder="Please enter here(numerical only)"
            min="0"
            max="24"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label>Enter time spent On Studying (in hours)</label>
          <input
            type="number"
            value={study}
            onChange={(e) => setStudy(e.target.value)}
            className="form-control study"
            id="exampleInputEmail1 study"
            aria-describedby="emailHelp"
            placeholder="Please enter here(numerical only)"
            min="0"
            max="24"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label>Enter time spent On Watching TV (in hours)</label>
          <input
            type="number"
            value={tv}
            onChange={(e) => setTV(e.target.value)}
            className="form-control tv"
            id="exampleInputEmail1 tv"
            aria-describedby="emailHelp"
            placeholder="Please enter here(numerical only)"
            min="0"
            max="24"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
      </div>

      <div
        className="form-check"
        style={{ alignItem: "center", justifyContent: "center" }}
      >
        <input
          type="checkbox"
          style={{ marginTop: "12px" }}
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          This Data is given by best of my Knowledge
        </label>
      </div>
      <div
        style={{
          margin: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Home;