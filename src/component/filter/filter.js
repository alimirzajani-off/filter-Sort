const Filter = ({ title, set, type = "text" }) => {
  return (
    <div className="fbItem">
      <h4>{title}</h4>
      <input type={type} onChange={(e) => set(e.target.value)} />
    </div>
  );
};
export default Filter;
