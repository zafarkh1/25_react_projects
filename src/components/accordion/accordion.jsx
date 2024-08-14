import data from "./data";
import "./accordion.css";
import { useState } from "react";

function Accordion(props) {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);
  const [isEnable, setEnable] = useState(false);

  const handleSingleAccordion = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultiplyAccordion = (id) => {
    const updateSelected = [...multiSelected];
    const index = updateSelected.indexOf(id);

    index !== -1 ? updateSelected.splice(index, 1) : updateSelected.push(id);
    setMultiSelected(updateSelected);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnable(!isEnable)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              className="item-container"
              key={item.id}
              onClick={
                isEnable
                  ? () => handleMultiplyAccordion(item.id)
                  : () => handleSingleAccordion(item.id)
              }
            >
              <div className="title">
                <h3>{item.question}</h3>
                <span className={selected === item.id ? "open" : ""}>+</span>
              </div>
              <div
                className={`content ${
                  isEnable
                    ? multiSelected.includes(item.id)
                      ? "open"
                      : ""
                    : selected === item.id
                    ? "open"
                    : ""
                }`}
              >
                {isEnable
                  ? multiSelected.includes(item.id) && <p>{item.answer}</p>
                  : selected === item.id && <p>{item.answer}</p>}
              </div>
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
