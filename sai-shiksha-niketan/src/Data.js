import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get("/hello/users");
      setData(data);
    };
    fetchdata();
  }, []);

  console.log(data);
  return (
    <div>
      {data ? (
        <>
          {data.map((item) => (
            <h1>{item.name}</h1>
          ))}
        </>
      ) : (
        <>there is no value</>
      )}
    </div>
  );
};

export default Data;
