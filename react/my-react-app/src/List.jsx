import React from "react";
import PropTypes from "prop-types";

function List(props) {
  const itemList = props.item;
  const category = props.category;
  // const fruits = [
  //   { id: 1, name: "Orange", calories: 95 },
  //   { id: 2, name: "Apple", calories: 45 },
  //   { id: 3, name: "Bananna", calories: 105 },
  // ];
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));
  //   fruits.sort((a, b) => a.calories - b.calories);

  //   const localeFruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const lisItem = localeFruits.map((localeFruit) => (
  //     <li key={localeFruit.id}>
  //       {localeFruit.name} : &nbsp;
  //       <b />
  //       {localeFruit.calories}
  //     </li>
  //   ));
  const lisItem = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp;
      <b />
      {item.calories}
    </li>
  ));

  return (
    <>
      <h3 className="list-cat">{category}</h3>
      <ol className="list-item">{lisItem}</ol>;
    </>
  );
}
List.propTypes = {
  category: PropTypes.string,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "category",
  item: [],
};
export default List;
