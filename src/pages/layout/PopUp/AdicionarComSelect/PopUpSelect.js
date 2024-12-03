import React from "react";
import styles from "./PopUpSelect.module.css"; // Certifique-se de apontar para o arquivo correto

function PopUpSelect ({ 
  isOpen, 
  onClose, 
  onSave, 
  fields = [], 
  values = {}, 
  onChange 
}){
  if (!isOpen) return null;

  return (
    <div className={styles.popup2}>
      <div className={styles.popup_inner2}>
        <h2>Configuração</h2>
        <form onSubmit={onSave}>
          {fields.map((field, index) => (
            <label key={index}>
              {field.label}
              <select
                name={field.name}
                value={values[field.name] || ""}
                onChange={onChange}
              >
                <option value="">Selecione uma opção</option>
                {field.options.map((option, idx) => (
                  <option key={idx} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="submit" id={styles.salvar2}>
              Salvar
            </button>
            <button type="button" onClick={onClose}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUpSelect;

