document.addEventListener("DOMContentLoaded", function () {

    const addBtn = document.getElementById("addBtn");
    const promptContainer = document.getElementById("promptContainer");

    addBtn.addEventListener("click", addPrompt);

    function addPrompt() {

        const title = prompt("Enter Prompt Title");

        if (!title || title.trim() === "") return;

        const category = prompt("Enter Category");

        if (!category || category.trim() === "") return;

        const promptText = prompt("Enter Your AI Prompt");

        if (!promptText || promptText.trim() === "") return;

        const card = document.createElement("div");
        card.className = "prompt-card";

        card.innerHTML = `
            <h3>${title}</h3>
            <strong>${category}</strong>
            <p>${promptText}</p>
        `;

        promptContainer.appendChild(card);
    }

});
