"use client"
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { saveAs } from "file-saver";

export default function Social() {

  const downloadResume = () => {
    saveAs("./Resume.pdf", "Resume.pdf");
  };


  return (
    <>
      <div>
        <button
          onClick={downloadResume}
          className="btn btn-outline relative-rounded-border bg-transparent   hover:from-purple-400 hover:to-blue-400 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          Download  Resume <FaDownload></FaDownload>
        </button>
      </div>
      <div className="flex space-x-4 mt-6 justify-center lg:justify-start ">
        <a className="text-purple-400 hover:text-white" href="https://github.com/rjkafi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8 "></FaGithub>
        </a>
        <a className="text-purple-400 hover:text-white" href="https://www.facebook.com/profile.php?id=100078846277290" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-8 h-8 "></FaFacebook>
        </a>
        <a className="text-purple-400 hover:text-white" href="https://wa.me/1317528495" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-8 h-8"></FaWhatsapp>
        </a>
        <a className="text-purple-400 hover:text-white" href="https://www.linkedin.com/in/abdullah-all-kafi/
" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-8 h-8"></FaLinkedin>
        </a>

      </div>
    </>
  )
}
