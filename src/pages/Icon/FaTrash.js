import { FaTrash } from "react-icons/fa";

function TrashlinkIcon() {
  return (
    <div>
      <style>{`
      .fa-trash {
          color: #ec1313;
          font-size: 20px;
          cursor: pointer;
          transition: color 0.3s ease;
          background: none;
          position: relative;
          text-align: center;
          justify-content: center;
          align-items: center;
          float: center;
        }
        /* Estilização do ícone */
        .fa-unlink:hover {
          color:#ec1000 ;
        }
      `}</style>
      {/* Ícone de lixo */}
      <FaTrash className="fa-trash" />
    </div>
  );
}

export default TrashlinkIcon;