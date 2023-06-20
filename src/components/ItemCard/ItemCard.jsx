import { Link } from "react-router-dom";

const ItemCard = ({ id, nombre, precio, descripcion, img }) => {
  return (
    <div className=" card col-3 py-5 p-5 my-3">
      <h4>{nombre}</h4>
      <img src={img} alt={nombre} />
      <p>{descripcion}</p>
      <p>Precio: $ {precio}</p>
      <Link className="btn bg-black text-white p-1 mx-5" to={`/detail/${id}`}>Ver más</Link>
    </div>
  );
};

export default ItemCard;
