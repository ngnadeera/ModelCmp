import { useState } from 'react'
import './App.css'
import { Model } from './components/Model';

function App() {

  const [isModalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add('active-modal');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('active-modal');
  };

  return (
    <>
    <div className="main">


      <button className='btn' onClick={()=> 
      {setModalOpen(true)}}>Click here</button>


    </div>

<Model isModalOpen={isModalOpen}  setModalOpen={setModalOpen}
            Title={"A Modern Approach to State and Side Effects"} Content={"React Hooks have become an integral part of modern React development, offering a more intuitive and functional approach to managing state and side effects. Whether you're starting a new project or enhancing an existing one, incorporating Hooks can lead to cleaner, more maintainable code. Explore the world of Hooks and discover how they can elevate your React development experience."}
            closeModal={closeModal}/>

      
    </>
  )
}

export default App
