import { useState, useEffect } from "react";
import { userApi } from "../../Utils/API";

import { DataGrid } from "@mui/x-data-grid";
function Home() {
  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "name", headerName: "name", width: 330 },
    { field: "email", headerName: "email", width: 330 },
    { field: "gender", headerName: "gender", width: 130 },
  ];
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch(userApi)
      .then((res) => res.json())
      .then((d) => {
        setData(d.results);
        localStorage.setItem("data", d.results);
      });
  }, []);
  const userFinal = [];
  for (let k = 0; k < data.length; k++) {
    userFinal.push(data[k].user);
  }
  const ki = userFinal.map((a, key) => {
    return {
      id: key,
      name: a.name.first,
      email: a.email,
      gender: a.gender,
    };
  });
  console.log(columns);
  const r = [ki][0];
  return (
    <div style={{ height: 700 }}>
      <DataGrid rows={r} columns={columns} checkboxSelection />
    </div>
  );
}

export default Home;
