import { useState } from "react";

const RadiationPDF = () =>{
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        //alert(JSON.stringify(inputs));
       /*await fetch('https://accounts.zoho.com/oauth/v2/token?client_id=' 
            + '1000.TTXCJ22XGZ06MVKCH6NI6FC2X71MQE'
            + '&grant_type=authorization_code'
            + '&client_secret=58f0eba2daa72d81b0d5b01acd96e7dbaa563a67fe'
            + '&redirect_uri=https://sumbea.org'
            + '&code=1000.76ed9aed592b65f9ae836cdec5dcb2fd.8e233ca5ba35120481286acec6fc9a32', {
            method: 'POST'
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log('error: ' + err.message);
        });*/
        const url = "https://campaigns.zoho.com/api/v1.1/json/listsubscribe?"
            + 'resfmt=JSON'
            + '&listkey=3z372bc5c5210740a15b69f246a008a21ab9b7067744398840f71cc41633d1fd60'
            + '&source=TheseNuts';
        let formInfo = Object.entries(inputs).map(pair => pair.map(encodeURIComponent).join("=")).join("&");
        console.log(url + "&contactinfo=" + formInfo);

        await fetch('https://campaigns.zoho.com/api/v1.1/json/listsubscribe?'
            + 'resfmt=JSON'
            + '&listkey=3z372bc5c5210740a15b69f246a008a21ab9b7067744398840f71cc41633d1fd60'
            + '&contactinfo=%7BFirst+Name%3Aconnor2%2CLast+Name%3Amccarl%2CContact+Email%3Aconnormccarl%40gmail.com%7D'
            + '&source=TheseNuts', {
            method: 'GET',
            headers: {
                'Authorization': 'Zoho-oauthtoken 1000.01e4361f5e3a4f3ba6f3f1174af372fb.770b3e2aa5d56408b03db09b3b6920cf',
                'Content-type': 'application/x-www-form-urlencoded',
            },
        }).then(() => console.log("fulfilled"))
        .catch((err) => console.log(err));
    };

    return (
        <main className="pdfContainer">
            <div className="pdfForm column">
                <img style={{width: 250, alignSelf: "center", marginBottom: 30}} src="./sumbea_vertical.png" alt="Sumbea Logo" />
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" value={inputs.name || ""} onChange={handleChange} />
                    <input type="text" name="city" placeholder="Your City" value={inputs.city || ""} onChange={handleChange} />
                    <input type="text" name="state" placeholder="Your State" value={inputs.state || ""} onChange={handleChange} />
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