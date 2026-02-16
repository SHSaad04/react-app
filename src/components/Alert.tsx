import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Prop) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      <strong>Welcome!</strong> Saad Javed
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
export default Alert;
