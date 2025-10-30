const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white p-6 rounded-lg shadow-lg z-100 text-gray-800">
        {/* <button className="w-30 h-10 bg-red-800 text-white float-right" onClick={onClose}>Close</button> */}
       
           <div className="">
             {children}
           </div>
        </div>
        </>
    );
}
 
export default Modal;


