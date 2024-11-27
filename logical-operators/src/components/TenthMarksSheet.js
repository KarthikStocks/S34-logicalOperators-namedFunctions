// import React, { useEffect, useRef } from "react";

// let TenthMarksSheet = () => {
//   let firstNameInputRef = useRef();
//   let lastNameInputRef = useRef();
//   let engInputRef = useRef();
//   let telInputRef = useRef();
//   let hindiInputRef = useRef();
//   let HTMLInputRef = useRef();
//   let CSSInputRef = useRef();
//   let reactInputRef = useRef();
//   let resultParaRef = useRef();
//   let cityName = "Bangalore";
//   let engResultRef = useRef();
//   let telResultRef = useRef();
//   let hindiResultRef = useRef();
//   let HTMLResultRef = useRef();
//   let CSSResultRef = useRef();
//   let reactResultRef = useRef();
//   //   console.log(firstName);  can't access

//   // let calculateResult = 20;
//   let calculateResult = () => {
//     console.log("Inside calculateResult");
//     console.log(cityName);
//     let firstName = firstNameInputRef.current.value;
//     let lastName = lastNameInputRef.current.value;
//     let engMarks = Number(engInputRef.current.value);
//     let telMarks = Number(telInputRef.current.value);
//     let hindiMarks = Number(hindiInputRef.current.value);
//     let HTMLMarks = Number(HTMLInputRef.current.value);
//     let CSSMarks = Number(CSSInputRef.current.value);
//     let reactMarks = Number(reactInputRef.current.value);
//     let totalMarks =
//       engMarks + telMarks + hindiMarks + HTMLMarks + CSSMarks + reactMarks;
//     let result;

//     if (
//       engMarks < 35 ||
//       telMarks < 35 ||
//       hindiInputRef < 35 ||
//       HTMLMarks < 35 ||
//       CSSMarks < 35 ||
//       reactMarks < 35
//     ) {
//       result = "Failed";
//     } else {
//       result = "Passed";
//     }

//     //   engResultRef.current.innerHTML = engMarks >= 35 ? "Pass" : "Fail";
//     //   telResultRef.current.innerHTML = telMarks >= 35 ? "Pass" : "Fail";
//     //   hindiResultRef.current.innerHTML =
//     //     hindiMarks >= 35 ? "Pass" : "Fail";
//     //   HTMLResultRef.current.innerHTML =
//     //     HTMLMarks >= 35 ? "Pass" : "Fail";
//     //   CSSResultRef.current.innerHTML = CSSMarks >= 35 ? "Pass" : "Fail";
//     //   reactResultRef.current.innerHTML =
//     //     reactMarks >= 35 ? "Pass" : "Fail";

//     console.log(engMarks >= 35 ? "Pass" : "Fail");
//     console.log(telMarks >= 35 ? "Pass" : "Fail");
//     console.log(hindiMarks >= 35 ? "Pass" : "Fail");
//     console.log(HTMLMarks >= 35 ? "Pass" : "Fail");
//     console.log(CSSMarks >= 35 ? "Pass" : "Fail");
//     console.log(reactMarks >= 35 ? "Pass" : "Fail");

//     //   engInputRef.current.value = 9999000099988777;
//     //   engInputRef.current.style.backgroundColor = "yellow";
//     //   alert(engInputRef.current.value);
//     //   alert(`Total Marks: ${totalMarks}`);

//     resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} & got total marks of ${totalMarks}`;
//     console.log(totalMarks);
//   };

//   // calculateResult();
//   // calculateResult();
//   // calculateResult();
//   // calculateResult();
//   // calculateResult();

//   useEffect(() => {
//     console.log("Marks Sheet Component Loaded");
//     // alert("Welcome to my application");
//   }, []);

//   let engOnFocus = () => {
//     engInputRef.current.style.backgroundColor = "aqua";
//   };

//   let engOnChange = () => {
//     let marks = engInputRef.current.value;
//     // engResultRef.current.innerHTML =
//     //   engInputRef.current.value >= 35 ? "Pass" : "Fail";

//     // engInputRef.current.style.backgroundColor =
//     //   marks >= 35 ? "lightgreen" : "red";
//     // engResultRef.current.style.backgroundColor =
//     //   marks >= 35 ? "lightgreen" : "red";

//     if (engInputRef.current.value >= 0 && engInputRef.current.value <= 100) {
//       if (engInputRef.current.value >= 35) {
//         engResultRef.current.innerHTML = "Pass";
//         engResultRef.current.style.color = "white";
//         engResultRef.current.style.backgroundColor = "green";
//       } else {
//         engResultRef.current.innerHTML = "Fail";
//         engResultRef.current.style.color = "red";
//         engResultRef.current.style.backgroundColor = "";
//       }
//     } else {
//       engResultRef.current.innerHTML = "Invalid";
//       engResultRef.current.style.color = "purple";
//       engResultRef.current.style.backgroundColor = "white";
//     }
//   };

//   let engOnBlur = () => {
//     engInputRef.current.style.backgroundColor = "";
//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <label>First Name</label>
//           <input
//             type="text"
//             ref={firstNameInputRef}
//             onFocus={() => {
//               firstNameInputRef.current.style.backgroundColor = "lightgreen";
//             }}
//             onChange={() => {}}
//             onBlur={() => {
//               firstNameInputRef.current.style.backgroundColor = "";
//             }}
//           ></input>
//           <label className="result"></label>
//         </div>
//         <div>
//           <label>Last Name</label>
//           <input
//             type="text"
//             ref={lastNameInputRef}
//             onFocus={() => {
//               lastNameInputRef.current.style.backgroundColor = "lightgreen";
//             }}
//             onChange={() => {}}
//             onBlur={() => {
//               lastNameInputRef.current.style.backgroundColor = "";
//             }}
//           ></input>
//           <label className="result"></label>
//         </div>
//         <div>
//           <label>English</label>
//           <input
//             type="number"
//             ref={engInputRef}
//             onFocus={() => {
//               engOnFocus();
//             }}
//             onChange={() => {
//               engOnChange();
//             }}
//             onBlur={() => {
//               engOnBlur();
//             }}
//           ></input>
//           <label className="result" ref={engResultRef}></label>
//         </div>
//         <div>
//           <label>Telugu</label>
//           <input
//             type="number"
//             ref={telInputRef}
//             onFocus={() => {
//               console.log("tel on focus");
//               telInputRef.current.style.backgroundColor = "lightgrey";
//             }}
//             onChange={() => {
//               console.log("tel on change");
//               let marks = telInputRef.current.value;

//               if (marks >= 0 && marks <= 100) {
//                 telResultRef.current.innerHTML = marks >= 35 ? "😁" : "😞";
//               } else {
//                 telResultRef.current.innerHTML = "Invalid";
//                 telResultRef.current.style.backgroundColor = "white";
//                 telResultRef.current.style.color = "purple";
//               }
//             }}
//             onBlur={() => {
//               console.log("tel on blur");
//               telInputRef.current.style.backgroundColor = "";
//             }}
//           ></input>
//           <label className="result" ref={telResultRef}></label>
//         </div>
//         <div>
//           <label>Hindi</label>
//           <input
//             type="number"
//             ref={hindiInputRef}
//             onFocus={() => {
//               console.log("Hindi on focus");
//               hindiInputRef.current.style.backgroundColor = "lightgreen";
//             }}
//             onChange={() => {
//               console.log("Hindi on change");
//               let marks = hindiInputRef.current.value;
//               hindiResultRef.current.innerHTML = marks >= 35 ? "Pass" : "Fail";
//             }}
//             onBlur={() => {
//               console.log("Hindi on blur");
//               hindiInputRef.current.style.backgroundColor = "";
//             }}
//           ></input>
//           <label className="result" ref={hindiResultRef}>
//             Result
//           </label>
//         </div>
//         <div>
//           <label>HTML</label>
//           <input
//             type="number"
//             ref={HTMLInputRef}
//             onFocus={() => {
//               HTMLInputRef.current.style.backgroundColor = "aqua";
//             }}
//             onChange={() => {
//               //   let marks = HTMLInputRef.current.value;
//               HTMLResultRef.current.innerHTML =
//                 HTMLInputRef.current.value >= 35 ? "Pass" : "Fail";
//             }}
//             onBlur={() => {
//               HTMLInputRef.current.style.backgroundColor = "";
//             }}
//           ></input>
//           <label className="result" ref={HTMLResultRef}></label>
//         </div>
//         <div>
//           <label>CSS</label>
//           <input
//             type="number"
//             ref={CSSInputRef}
//             onFocus={() => {
//               CSSInputRef.current.style.backgroundColor = "aqua";
//             }}
//             onChange={() => {
//               let marks = CSSInputRef.current.value;
//               CSSResultRef.current.innerHTML = marks >= 35 ? "Pass" : "Fail";
//             }}
//             onBlur={() => {
//               CSSInputRef.current.style.backgroundColor = "";
//             }}
//           ></input>
//           <label className="result" ref={CSSResultRef}></label>
//         </div>
//         <div>
//           <label>React</label>
//           <input
//             type="number"
//             ref={reactInputRef}
//             onFocus={() => {
//               reactInputRef.current.style.backgroundColor = "aqua";
//             }}
//             onChange={() => {
//               //   let marks = engInputRef.current.value;
//               reactResultRef.current.innerHTML =
//                 reactInputRef.current.value >= 35 ? "Pass" : "Fail";
//             }}
//             onBlur={() => {
//               reactInputRef.current.style.backgroundColor = "";
//             }}
//           ></input>
//           <label className="result" ref={reactResultRef}></label>
//         </div>
//         <div>
//           <button
//             type="button"
//             // onMouseMove
//             onClick={() => {
//               calculateResult();
//             }}
//           >
//             Calculate Result
//           </button>
//         </div>
//         <p ref={resultParaRef}>Please Enter Marks and Click Calculate</p>
//       </form>
//     </div>
//   );
// };

// export default TenthMarksSheet;

import React, { useState, useRef } from "react";

const TenthMarksSheet = () => {
  const stockNameRef = useRef();
  const openingPriceRef = useRef();
  const closingPriceRef = useRef();
  const highPriceRef = useRef();
  const lowPriceRef = useRef();

  const [errors, setErrors] = useState({
    stockName: "",
    openPrice: "",
    closePrice: "",
    highPrice: "",
    lowPrice: "",
  });

  const [stockDetails, setStockDetails] = useState(null);

  const [focus, setFocus] = useState({
    stockName: false,
    openPrice: false,
    closePrice: false,
    highPrice: false,
    lowPrice: false,
  });

  const [validity, setValidity] = useState({
    stockName: true,
    openPrice: true,
    closePrice: true,
    highPrice: true,
    lowPrice: true,
  });

  const validateInput = (field, value) => {
    if (field !== "stockName" && (isNaN(value) || value < 0)) {
      return "Invalid value";
    }
    if (
      field === "lowPrice" &&
      parseFloat(value) > parseFloat(highPriceRef.current.value)
    ) {
      return "Low price cannot be greater than high price";
    }
    return "";
  };

  const handleFocus = (field) => {
    setFocus((prevFocus) => ({
      ...prevFocus,
      [field]: true,
    }));
  };

  const handleBlur = (field, value) => {
    setFocus((prevFocus) => ({
      ...prevFocus,
      [field]: false,
    }));
    const error = validateInput(field, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
    setValidity((prevValidity) => ({
      ...prevValidity,
      [field]: error === "",
    }));
  };

  const handleInputChange = (field, value) => {
    const error = validateInput(field, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
    setValidity((prevValidity) => ({
      ...prevValidity,
      [field]: error === "",
    }));
  };

  const calculatePerformance = () => {
    const stockName = stockNameRef.current.value;
    const openPrice = parseFloat(openingPriceRef.current.value || 0);
    const closePrice = parseFloat(closingPriceRef.current.value || 0);
    const highPrice = parseFloat(highPriceRef.current.value || 0);
    const lowPrice = parseFloat(lowPriceRef.current.value || 0);

    // Ensure no invalid inputs
    if (Object.values(errors).some((error) => error !== "")) {
      alert("Please fix invalid inputs before calculating.");
      return;
    }

    let performance = "";
    let performanceClass = "";
    let percentageChange = 0;

    if (openPrice > 0) {
      percentageChange = ((closePrice - openPrice) / openPrice) * 100;

      if (closePrice > openPrice) {
        performance = "Profit 📈";
        performanceClass = "profit";
      } else if (closePrice < openPrice) {
        performance = "Loss 📉";
        performanceClass = "loss";
      } else {
        performance = "No Change";
        performanceClass = "neutral";
      }
    } else {
      performance = "Invalid Data";
      performanceClass = "neutral";
    }

    setStockDetails({
      stockName,
      openPrice,
      closePrice,
      highPrice,
      lowPrice,
      performance,
      performanceClass,
      percentageChange: percentageChange.toFixed(2), // Limit to 2 decimal places
    });
  };

  const inputStyle = (field) => {
    if (focus[field]) {
      return { backgroundColor: "#f0fff0" }; // Light yellow when focused
    }
    if (!validity[field]) {
      return { backgroundColor: "#ffcccb" }; // Red for invalid
    }
    return {}; // Default for valid or no focus
  };

  return (
    <div className="stock-dashboard">
      <h1 className="heading">Stock Market Dashboard</h1>
      <form>
        <div className="input-group">
          <label>Stock Name:</label>
          <input
            type="text"
            ref={stockNameRef}
            placeholder="Enter company name"
            onFocus={() => handleFocus("stockName")}
            onChange={(e) => handleInputChange("stockName", e.target.value)}
            onBlur={() => handleBlur("stockName", stockNameRef.current.value)}
            style={inputStyle("stockName")}
          />
          {errors.stockName && (
            <span className="error">{errors.stockName}</span>
          )}
        </div>
        <div className="input-group">
          <label>Opening Price:</label>
          <input
            type="number"
            ref={openingPriceRef}
            placeholder="Enter opening price"
            onFocus={() => handleFocus("openPrice")}
            onChange={(e) => handleInputChange("openPrice", e.target.value)}
            onBlur={() =>
              handleBlur("openPrice", openingPriceRef.current.value)
            }
            style={inputStyle("openPrice")}
          />
          {errors.openPrice && (
            <span className="error">{errors.openPrice}</span>
          )}
        </div>
        <div className="input-group">
          <label>Closing Price:</label>
          <input
            type="number"
            ref={closingPriceRef}
            placeholder="Enter closing price"
            onFocus={() => handleFocus("closePrice")}
            onChange={(e) => handleInputChange("closePrice", e.target.value)}
            onBlur={() =>
              handleBlur("closePrice", closingPriceRef.current.value)
            }
            style={inputStyle("closePrice")}
          />
          {errors.closePrice && (
            <span className="error">{errors.closePrice}</span>
          )}
        </div>
        <div className="input-group">
          <label>High Price:</label>
          <input
            type="number"
            ref={highPriceRef}
            placeholder="Enter high price"
            onFocus={() => handleFocus("highPrice")}
            onChange={(e) => handleInputChange("highPrice", e.target.value)}
            onBlur={() => handleBlur("highPrice", highPriceRef.current.value)}
            style={inputStyle("highPrice")}
          />
          {errors.highPrice && (
            <span className="error">{errors.highPrice}</span>
          )}
        </div>
        <div className="input-group">
          <label>Low Price:</label>
          <input
            type="number"
            ref={lowPriceRef}
            placeholder="Enter low price"
            onFocus={() => handleFocus("lowPrice")}
            onChange={(e) => handleInputChange("lowPrice", e.target.value)}
            onBlur={() => handleBlur("lowPrice", lowPriceRef.current.value)}
            style={inputStyle("lowPrice")}
          />
          {errors.lowPrice && <span className="error">{errors.lowPrice}</span>}
        </div>
        <div className="btn">
          <button
            type="button"
            onClick={calculatePerformance}
            className="calculate-btn"
          >
            Calculate Performance
          </button>
        </div>
      </form>

      {stockDetails && (
        <div className={`result ${stockDetails.performanceClass}`}>
          <h3>Performance Summary</h3>
          <p>
            <strong>Stock:</strong> {stockDetails.stockName}
          </p>
          <p>
            <strong>Opening Price:</strong> ${stockDetails.openPrice}
          </p>
          <p>
            <strong>Closing Price:</strong> ${stockDetails.closePrice}
          </p>
          <p>
            <strong>High:</strong> ${stockDetails.highPrice}
          </p>
          <p>
            <strong>Low:</strong> ${stockDetails.lowPrice}
          </p>
          <p>
            <strong>Performance:</strong>{" "}
            <span className={stockDetails.performanceClass}>
              {stockDetails.performance}
            </span>
          </p>
          <p>
            <strong>Percentage Change:</strong>{" "}
            <span className="percentage">{stockDetails.percentageChange}%</span>
          </p>
        </div>
      )}
      <footer id="footer">
        © 2024 Stock Market Investor. All rights reserved.
      </footer>
    </div>
  );
};

export default TenthMarksSheet;
