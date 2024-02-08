import { memo } from "react";
import { log } from "../../log.js";

// we use memo function because if a component is rendered however it is not supposed to render because we dont render that functionality of the app to stop that render we use (memo) function
//NOTE it is used for Component functions to wrap them
const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log("<IconButton /> rendered", 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});
export default IconButton;
