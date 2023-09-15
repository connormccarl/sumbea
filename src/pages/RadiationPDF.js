import { useState } from "react";

const RadiationPDF = () =>{
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
    };

    return (
        <main className="pdfContainer">
            <div className="pdfForm column">
                <img style={{width: 250, alignSelf: "center", marginBottom: 30}} src="./sumbea_vertical.png" alt="Sumbea Logo" />
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" value={inputs.name || ""} onChange={handleChange} />
                    <input type="text" name="location" placeholder="Your Location" value={inputs.location || ""} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email Address" value={inputs.email || ""} onChange={handleChange} />
                    <input type="submit" value="Download PDF" />
                </form>
            </div>
            <div className="pdfText column">
                <h2>Free Radiation PDF</h2>
                <p>Get our FREE PDF covering everything Radiation related. The PDF covers:</p>
                <ol>
                    <li>What is Radiation</li>
                    <li>How to avoid Radiation</li>
                    <li>Radiation Free Places</li>
                    <li>My Own Experience</li>
                    <li>Healing from Radiation</li>
                </ol>
                <p>After reading this PDF, you will understand the common causes of Radiation, where to find solace from Radiation and how to remove these toxins from your body.</p>
                <p>Fill out the form and receive the PDF in your inbox.</p>
            </div>
        </main>
    );
};

export default RadiationPDF;