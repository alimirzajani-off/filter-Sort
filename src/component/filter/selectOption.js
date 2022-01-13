import { Children } from "react/cjs/react.production.min";

const Select = ({ set, ...props }) => {
  return (
    <div className="fbItem">
      <h4>{props.title}</h4>
      <select name="cars" id="cars" onChange={(e) => set(e.target.value)}>
        {props.children}
      </select>
    </div>
  );
};

export default Select;
