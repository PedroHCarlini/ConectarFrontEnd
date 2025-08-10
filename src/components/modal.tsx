import ReactDOM from "react-dom";

export const Modal = ({
  children,
  isOpen,
  title,
  onClickClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  onClickClose: () => void;
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black/50">
      <div className="max-w-[800px] bg-white rounded-md p-8 mt-20 mx-auto mb-0">
        <div className="flex items-center justify-between">
          <p className="font-bold text-2xl">{title}</p>
          <div
            className="flex items-center border border-gray-200 py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer"
            onClick={onClickClose}
          >
            <button type="button" className="cursor-pointer">
              X
            </button>
          </div>
        </div>
        <hr className="my-8 border-t border-gray-200" />
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("portal-root")!
  );
};
