import React, { useEffect } from "react";
import { useState } from "react";
import { httpGetData } from "../../functions/httpRequest";
import TableDataRegistros from "../Reportes/TableComponent";

export const ReportJustSemana = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getDataDesincorporaciones();
  }, []);

  const getDataDesincorporaciones = async () => {
    const url = "/desincorporaciones/incumplimientos-list/inc";
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success) {
      setData(_data.data);
    }
  };

  console.log(data);
  {/*
    <div>
      {data.map((incp) => (
        <p key={incp.id}>{incp.fecha}</p>
      ))}
    </div>
*/}   

  return (
    <TableDataRegistros/> 
  )
};
