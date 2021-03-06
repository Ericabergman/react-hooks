import React from "react";

const NameTag = ({ firstName, lastName }) => {
  // destructuring props
  if (!firstName && !lastName) {
    return (
      <div className="name">
        <h3>Invalid Name</h3>
      </div>
    );
  }

  return (
    <div className="name">
      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
      {firstName === "Erica" && (
        <div
          style={{
            color: "magenta",
            marginBottom: "10px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          vip
        </div>
      )}
    </div>
  );
};

export default NameTag;

// fragment is an empty tag <> </>
