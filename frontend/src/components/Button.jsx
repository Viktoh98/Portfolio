import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.isSubmit ? "submit" : "button"}
      onSubmit={props.isSubmit ? props.submit : null}
      className="font-bold text-[1.2rem] sm:text-[1.3rem] font-[system-ui] bg-primary vs:px-20 px-24 py-3 rounded-full ] hover:bg-white hover:scale-[1.05] hover:bg-gradient-to-r hover:from-secondary hover:to-primary shadow-lg "
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
