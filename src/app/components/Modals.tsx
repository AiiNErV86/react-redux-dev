interface modalProps {
    modalOpen: boolean;
    setModalStatus: (status: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modals: React.FC<modalProps> = ({ modalOpen, setModalStatus, children }) => {
    return (
        <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
            <div className="modal-box relative">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModalStatus(false)}>✕</button>
                {children}
                
            </div>
        </div>
    )
}

export default Modals