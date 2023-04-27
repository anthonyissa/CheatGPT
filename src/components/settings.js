export const createSettingsElement = () => {
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox-code-only";
    
    const label = document.createElement("label");
    label.id = "label-code-only";
    label.htmlFor = "checkbox-code-only";
    label.innerHTML = "Code only";

    div.appendChild(checkbox);
    div.appendChild(label);
    
    div.className = "settings-0x4874578";
    return div;
}

export const isCodeOnly = () => {
    const checkbox = document.querySelector(".settings-0x4874578 input");
    return checkbox.checked;
}