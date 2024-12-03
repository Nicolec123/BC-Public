import { FaPaperclip } from "react-icons/fa";

function AnexarlinkIcon() {
  return (
    <div>
      <style>{`
        .fa-paperClip {
            color: #e41cc3; 
    font-size: 20px; 
    cursor: pointer; /* Adicione um cursor de ponteiro ao passar o mouse */
    transition: color 0.3s ease; /* Adicione uma transição suave para alterações de cor */
          user-select: none;
          text-align: center;
        }
        /* Estilização do ícone */
        .fa-paperClip:hover {
          color:#e792d9 ;
        }
      `}</style>
      {/* Ícone de anexo */}
      <FaPaperclip className="fa-paperClip" />
    </div>
  );
}

export default AnexarlinkIcon;







