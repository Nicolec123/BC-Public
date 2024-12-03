import React from "react";
import styles from "./PopUpASP.module.css"; // Certifique-se de apontar para o arquivo correto

function PopUpASP ({ 
  title="",
  isOpen, 
  onClose, 
  onSave, 
  fields = [], 
  values = {}, 
  onChange ,
  customWidth 

}){
  if (!isOpen) return null;

  return (
    <div className={styles.popup2}
   >

      <div className={styles.popup_inner2}
       style={{ width: customWidth || "400px" }} >
      <h2>{title}</h2>
      <form onSubmit={onSave}>
          {fields.map((field, index) => (
            <label key={index}>
              {field.label}
              <input
                type={field.type || "text"} // Default para "text" caso o tipo não seja especificado
                name={field.name}
                value={values[field.name] || ""}
                onChange={onChange}
              />
        
            
         </label>
          ))}
            <button type="submit" id={styles.salvar}>
              Salvar
            </button>
            <button type="button" onClick={onClose}>
              Fechar
            </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpASP;
