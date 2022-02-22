import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, lightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{
            backgroundColor: lightMode ? "#000" : "#fff",
            borderRadius: "10",
            width: "100%",
          }}
          controls
        >
          Your Browser doesn't support audio.
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean, index) =>
          mean.meanings.map((item, index) =>
            item.definitions.map((def, index) => (
              <div
                className="singleMeaning"
                style={{
                  backgroundColor: lightMode ? "black" : "white",
                  color: lightMode ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr
                  style={{
                    backgroundColor: lightMode ? "white" : "black",
                    width: "100%",
                  }}
                />

                {def.example && (
                  <span>
                    <b>Example : </b> {def.example}
                  </span>
                )}

                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b>{" "}
                    {def.synonyms.map((synonym, index) => `${synonym}, `)}
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
