import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css";
import Title from "../Title/Title.js";

export const ItemListContainer = ({ message }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "1");
    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("tipo", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoriaId]);

  return (
    <>
      <Title greeting={message} />
      <div className="container-div">
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
