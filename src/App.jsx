import { useState } from "react";
import { BodyNeeds, LatestPosts } from "./components";
import Modal from "./components/Modal";

function App() {
  const [modalState, setModalState] = useState({
    showModal: false,
    image: {}
  });

  return (
    <>
      <BodyNeeds setModalState={setModalState} />
      <LatestPosts />
      <Modal state={modalState} setState={setModalState} />
    </>
  );
}

export default App;
