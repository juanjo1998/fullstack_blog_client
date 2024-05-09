import "./ErrorMessage.css";
export const ErrorMessage = ({ errors }) => {
  return (
    <div className="error-message">
      <ul className="error-message__list">
        {errors.length > 0 &&
          errors.map((err) => (
            <li className="error-message__list-item" key={err.msg}>
              {err.msg}
            </li>
          ))}
      </ul>
    </div>
  );
};
