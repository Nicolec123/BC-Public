import React from "react";
import styles from "./PopUpACP.module.css"; // Certifique-se de apontar para o arquivo correto

import PesquisaIcone from "../../../buttom/PesquisaIcone"; // Importa o botão de pesquisa como icone(sem a palavra pesquisa)

function PopUpACP ({ 
  title="",
  
  isOpen, 
  onClose, 
  onSave, 
  fields = [], 
  values = {}, 
  onChange ,
  customWidth,
  customHeight

}) {
  if (!isOpen) return null;

  return (
    <div className={styles.popup2}
   >

      <div className={styles.popup_inner2}
       style={{ width: customWidth || "auto", height: customHeight || "auto"}} >
      <h2>{title}</h2>
      <form onSubmit={onSave}>
          {fields.map((field, index) => (
            <label key={index} className={styles.flex_box_grupoEmpresa}>
              {field.label}
              <input className={styles.flex_box_grupoEmpresa}
                type={field.type || "text"} // Default para "text" caso o tipo não seja especificado
                name={field.name}
                value={values[field.name] || ""}
                onChange={onChange}
              />
        <PesquisaIcone/>
            
         </label>
          ))}
            <button type="submit" id={styles.salvar2}>
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

export default PopUpACP;
