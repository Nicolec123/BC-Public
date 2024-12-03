import { FaUnlink } from "react-icons/fa";

function UnlinkIcon() {
  return (
    <div>
      <style>{`
        .fa-unlink {
          color: #874912;
          font-size: 24px;
          cursor: pointer;
          transition: color 0.3s ease-in-out;
          user-select: none;
          text-align: center;
        }
        /* Estilização do ícone */
        .fa-unlink:hover {
          color:#c98d58 ;
        }
      `}</style>
      {/* Ícone de desconexão */}
      <FaUnlink className="fa-unlink" />
    </div>
  );
}

export default UnlinkIcon;