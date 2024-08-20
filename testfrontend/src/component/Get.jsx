import React from 'react';
import axios from 'axios';

const Get = () => {
    const get = async () => {
        const token = localStorage.getItem("token");
        const url = `http://localhost:8080/api/get`;

        try {
            const res = await axios.post(url, null, { // Send null data, not token in body
                headers: {
                    Authorization: `Bearer ${token}`, // Include token in Authorization header
                }
            });
            console.log(res);
            // Handle successful response here
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors here
        }
    };

    return (
        <div>
            <button onClick={get}>Get</button>
        </div>
    );
};

export default Get;