import "./SuccessMessage.css";
export const SuccessMessage = ({ msg = "" }) => {
  return (
    <div className="success-message">
      <ul className="success-message__list">
        <li className="success-message__list-item" key={msg}>
          {msg}
        </li>
      </ul>
    </div>
  );
};
