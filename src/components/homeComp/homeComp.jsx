import React, { useState } from "react";
import { homeBanner } from "../../ImageImport/imageImport";
import FileUploader from "../fileUploader/fileUploader";
import CodeEditor from "../Editor/Editor";
import { motion } from "framer-motion";
import { Modal } from "../modal/modal";

export const HomeComp = () => {
  const [openModal,setOpenModal]=useState(false)
  const [toggle, setToggle] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [output, setOutput] = useState('');
 
  return (
    <div
      className="w-full h-[100vh] flex items-center"
      style={{ backgroundImage: `url(${homeBanner})` }}
    >
      <div className="container">
        <div
          className={`flex justify-between items-center`}
        >
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring" }}
            className={`w-[50%]`}
          >
            <div className="flex gap-1 my-2">
              <button
                type="button"
                onClick={() => setToggle(true)} style={{ backgroundColor: toggle ? "white" : "", color: toggle ? "black" : "" }} className="border border-white rounded text-white p-2 w-[150px] "
              >
                Zip Upload
              </button>

              <button
                type="button"
                onClick={() => setToggle(false)} style={{ backgroundColor: !toggle ? "white" : "", color: !toggle ? "black" : "" }} className="border border-white rounded text-white p-2  w-[150px] "
              >
                Text Code Upload
              </button>
            </div>

            {!toggle ? (
              <CodeEditor
                setIsPreview={setIsPreview}
                setOutput={setOutput}
                output={output}
                setOpenModal={setOpenModal}
              />
            ) : (
              <FileUploader />
            )}
          </motion.div>
          <div className="heading_main w-[50%] ">
            {!isPreview ? <motion.div
              initial={{ y: -200 }}
              whileInView={{ y: 0 }}
              transition={{ type: "spring" }}
              className="w-[70%] mx-auto"
            >
              <div className=" border border-white backdrop-blur-md w-[500px] p-5 rounded-md">
                {!isPreview && (
                  <h1 className="font-extrabold text-white text-[130px]  ">
                    Upload{" "}
                  </h1>
                )}
                {!isPreview && (
                  <h2 className="text-center text-white  text-[20px]">
                    Your Code For Backup !
                  </h2>
                )}
              </div>
            </motion.div> : (
              <motion.div
                initial={{ y: -200 }}
                whileInView={{ y: 20 }}
                transition={{ type: "spring" }} className="h-[630px] mx-2  border border-white bg-[#1f214e] text-white rounded shadow-md">
                <div className="flex justify-between mx-2">
                  <h3 className=" p-1 text-lg font-semibold">Output :</h3>
                  <div className="">
                    <button className="border-l px-2 h-[35px]" onClick={() => setIsPreview(false)}>close</button>
                    <button className="border-l px-2 h-[35px]" onClick={() => setOutput("")}>Clear</button>
                  </div>
                </div>
                <hr />
                <div className="p-2">
                  <pre className="whitespace-pre-wrap break-words">{output}</pre>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {
        openModal &&  <Modal setOpenModal={setOpenModal} openModal={openModal}/>
      }
   
    </div>
  );
};
