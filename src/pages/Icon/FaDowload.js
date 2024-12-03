import { FaDownload } from "react-icons/fa";

function DownloadlinkIcon() {
  
  return (
    <div>
      <style>{`
        .fa-dowload {dfg
        left: 10%;
        position: relative;
          color: #007bff; /* Altere a cor do ícone */
    font-size: 20px; 
    cursor: pointer; /* Adicione um cursor de ponteiro ao passar o mouse */
    transition: color 0.3s ease; /* Adicione uma transição suave para alterações de cor */t;
          user-select: none;
          text-align: center;
        }
        /* Estilização do ícone */
        .fa-dowload:hover {
          color: #0056b3; ;
        }
      `}</style>
      {/* Ícone de desconexão */}
      <FaDownload className="fa-dowload" />
    </div>
  );
}

export default DownloadlinkIcon;


