import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { Link, useLocation, useParams } from "react-router-dom";
const Recipe = () => {
  const [active, setActive] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const { title } = location.state;
  console.log(title);
  useEffect(async () => {
    const api_call = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );
    setActive(await (await api_call.json()).recipe);
  }, []);
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div className="container">
      <div className="active-recipe">
        <img
          src={active.image_url}
          alt={active.title}
          className="active-recipe__img"
        />
        <h3 className="active-recipe__title">{active.title}</h3>
        <h4 className="active-recipe__publisher">
          Publisher:<span>{active.publisher}</span>
        </h4>
        <p className="active-recipe__website">
          Website:
          <span>
            <a href={active.publisher_url}>{active.publisher_url}</a>
          </span>
        </p>
        <button className="active-recipe__button">
          <Link to="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Recipe;
