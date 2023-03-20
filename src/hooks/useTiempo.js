import React, { useState, useEffect } from "react";

export const useTiempo = (segundo) => {

const [segundos, setSegundos] = useState(segundo)
const [conteo, setConteo] = useState(false)

useEffect(() => {
  if(conteo){
    const interval = setInterval(() => {
      if (segundos !== 0){
        setSegundos(segundos - 1)
      }
    }, 1000);
    return () => {
      return clearInterval(interval)
    };
  }
}, [conteo, segundos]);
return [segundos, setConteo]
}