import { FaEdit } from "react-icons/fa";

function EditLinkIcon({ display, justify, margin, color,customHeight }) {
  return (
    <div style={{ display: display, justifyContent: justify,
     marginTop: margin, color, height: customHeight}}>
        
      <style>{`
        .fa-edit {
          font-size: 30px;
          cursor: pointer;
                 display:'',
                 justify'',
                 margin '',
               color: color,
          customHeight'',
      transition: color 0.3s ease-in-out;
          user-select: none;
          left: 1%;
          text-align: center;
        }
        /* Estilização do ícone */
        .fa-edit:hover {
          color: blue;
        }
      `}</style>
      {/* Ícone de edição */}
      <FaEdit className="fa-edit" />
    </div>
  );
}

export default EditLinkIcon;