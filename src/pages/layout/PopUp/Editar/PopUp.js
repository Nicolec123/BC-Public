import React from "react";
import styles from "./PopUp.module.css"; // Certifique-se de apontar para o arquivo correto

function Popup ({ 
  title="Editar Holding",
  
  isOpen, 
  onClose, 
  onSave, 
  field= [], 
  values = {}, 
  onChange ,
  customWidth,
  customHeight
}){
  if (!isOpen) return null;

  return (
    <div className={styles.popup2}>
      <div 
        className={styles.popup_inner2}
        style={{ width: customWidth || "auto", height: customHeight || "auto" }}
      >
        <h2>{title}</h2>
        <form onSubmit={onSave}>
          {field.map((field, index) => (
            <div key={index}> {/* Div como elemento pai do bloco */}
              <label>
                {field.label}
              </label>
              {field.type === "select" && ( /* de campo select */
                <select
                  name={field.name}
                  value={values[field.name] || ""}
                  onChange={onChange}
                >
                  <option value="">Selecione</option>
                  <option value="4">Roteirização</option>
                	<option value="5">RH-Economia</option>
	                <option value="6">Holding</option>
                	<option value="7">Roteirização Holding</option>
                  {field.options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
              {field.type === "date" && ( /* Exemplo de campo date */
                <input
                  type="date"
                  name={field.name}
                  value={values[field.name] || ""}
                  onChange={onChange}
                />
              )}
              {field.type !== "select" && field.type !== "date" && ( /* Outros campos */
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={values[field.name] || ""}
                  onChange={onChange}
                />
              )}
            </div>
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
}
export default Popup;
