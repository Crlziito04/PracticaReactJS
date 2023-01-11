import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  // Use params devuelve un string
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "1", id);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [id]);

  return (
    <>
      <ItemDetail data={data} />;
    </>
  );
};

export default ItemDetailContainer;
