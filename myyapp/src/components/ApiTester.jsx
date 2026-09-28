import { useState } from "react";
import "./App.css";

function Postman() {

    const [method, setMethod] = useState("GET");

    const [url, setUrl] = useState(
        "http://localhost:3000/users"
    );

    const [body, setBody] = useState("");

    const [response, setResponse] = useState("");

    const [status, setStatus] = useState("");

    const sendRequest = async () => {

        try {

            const options = {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                }
            };

            // Body for POST and PUT
            if (method === "POST" || method === "PUT") {

                if (body.trim() === "") {
                    alert("Please enter request body");
                    return;
                }

                try {
                    JSON.parse(body);
                } catch {
                    alert("Invalid JSON");
                    return;
                }

                options.body = body;
            }

            const res = await fetch(url, options);

            setStatus(res.status);

            const data = await res.json();

            setResponse(
                JSON.stringify(data, null, 2)
            );

        } catch (error) {

            setStatus("Error");

            setResponse(error.message);
        }
    };

    return (
        <div className="dashboard">

            <div className="container">

                <div className="header">

                    <div className="logo">
                        ⚡
                    </div>

                    <div>
                        <h1>API Testing Dashboard</h1>

                        <p>
                            Test your Express REST API without Postman
                        </p>
                    </div>

                </div>


                {/* Request section */}

                <div className="request-bar">

                    <select
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className={`method ${method.toLowerCase()}`}
                    >

                        <option value="GET">
                            GET
                        </option>

                        <option value="POST">
                            POST
                        </option>

                        <option value="PUT">
                            PUT
                        </option>

                        <option value="DELETE">
                            DELETE
                        </option>

                    </select>


                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="url"
                    />


                    <button
                        onClick={sendRequest}
                        className="send-button"
                    >
                        Send Request
                    </button>

                </div>


                {/* Request Body */}

                {(method === "POST" || method === "PUT") && (

                    <div className="section">

                        <h2>Request Body</h2>

                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder={`{
  "id": 102,
  "name": "Dhruv",
  "email": "dhruv@gmail.com"
}`}
                        />

                    </div>

                )}


                {/* Response */}

                <div className="section">

                    <div className="response-heading">

                        <h2>Response</h2>

                        {status && (
                            <span
                                className={
                                    status >= 200 && status < 300
                                        ? "status success"
                                        : "status error"
                                }
                            >
                                Status: {status}
                            </span>
                        )}

                    </div>


                    <pre className="response-box">
                        {response ||
                            "Response will appear here..."}
                    </pre>

                </div>


                <div className="footer">
                    Custom API Testing Tool • React + Express.js
                </div>

            </div>

        </div>
    );
}

export default Postman;