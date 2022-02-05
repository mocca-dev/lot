const MenuItem = ({ label, action }) => (
  <li key={label} onClick={action}>
    {label}
  </li>
);

export default MenuItem;
