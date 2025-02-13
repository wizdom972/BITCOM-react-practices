import React from "react";
import Modal from "react-modal";
import ReactModal from "react-modal";
import * as styles from "./modal.scss";

ReactModal.setAppElement("body");

export default function App() {
    const [modal01IsOpen, setModal01IsOpen] = useState(false);
    const [modal02IsOpen, setModal02IsOpen] = useState(false);
    const [modal03IsOpen, setModal03IsOpen] = useState(false);
    const [modal04IsOpen, setModal04IsOpen] = useState(false);
    const [modal05IsOpen, setModal05IsOpen] = useState(false);

    return (
        <>
            {/* example modal01: Minimal */}
            <button onClick={() => setModal01IsOpen(true)}>modal01</button>
            <br />
            <br />

            <Modal isOpen={modal01IsOpen} contentLabel="modal01 example">
                <h1>modal01</h1>
                <button onClick={() => setModal01IsOpen(false)}>Close</button>
            </Modal>

            {/* example modal02: Using onRequestClose */}
            <button onClick={() => setModal02IsOpen(true)}>modal02</button>
            <br />
            <br />

            <Modal
                isOpen={modal02IsOpen}
                onRequestClose={() => setModal02IsOpen(false)}
                contentLabel="modal02 example"
            >
                <h1>modal02</h1>
                <button onClick={() => setModal02IsOpen(false)}>Close</button>
            </Modal>

            {/* example modal03: Using shouldCloseOnOverlayClick */}
            <button>modal03</button>
            <br />
            <br />
            <Modal
                isOpen={modal03IsOpen}
                onRequestClose={() => setModal03IsOpen(false)}
                shouldCloseOnOverlayClick={false}
                contentLabel="modal03 example"
            >
                <h1>modal03</h1>
                <button onClick={() => setModal03IsOpen(false)}>Close</button>
            </Modal>

            {/* example modal04: Using inline styles */}
            <button onClick={() => setModal04IsOpen(true)}>modal04</button>
            <br />
            <br />

            <Modal
                isOpen={modal04IsOpen}
                contentLabel="modal04 example"
                style={{
                    overlay: {
                        backgroundColor: "RGB(0, 0, 0, 0.5)",
                    },
                    content: {
                        backgroundColor: "#ccc",
                    },
                }}
            >
                <h1>modal04</h1>
                <button onClick={() => setModal04IsOpen(false)}>Close</button>
            </Modal>

            {/* example modal05: Using CSS/SASS styles */}
            <button onClick={() => setModal05IsOpen(true)}>modal05</button>
            <br />
            <br />

            <Modal
                isOpen={modal05IsOpen}
                className={styles.Modal}
                overlayClassName={styles.Overlay}
                style={{ content: { width: 350 } }}
                contentLabel="modal05 example"
            >
                <h1>비밀번호입력</h1>
                <div>하하하하하하하~</div>
                <input type="text" />
                <div className={styles["modal-dialog-buttons"]}>
                    <button
                        onClick={() => {
                            console.log("ajax delete");
                        }}
                    >
                        확인
                    </button>
                    <button onClick={() => sf}>취소</button>
                </div>
            </Modal>
        </>
    );
}
