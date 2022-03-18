import React from "react";
import "./Definitions.css";
const Definitions = ({ word, category, meanings ,light}) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && meanings[0].phonetics[0] && (
        <audio
          className="singleMean"
          src={meanings[0].phonetics[0].audio}
          style={{ minHeight: "30px", width: "95%" }}
          controls
        >
          Your browser doesnt support audio
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ backgroundColor:light?'#3b5360': "white", color:light?'white':"black" }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example:</b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms:</b>
                    {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
