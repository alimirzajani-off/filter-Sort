const Filter = ({ title, set, type = "text", valu }) => {
  return (
    <div className="fbItem">
      <h4>{title}</h4>
      <input type={type} value={valu} onChange={(e) => set(e.target.value)} />
    </div>
  );
};
export default Filter;
