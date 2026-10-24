
const OWNER_EMAIL = "fuadmm015@gmail.com";

const form = document.querySelector("#orderForm");
const message = document.querySelector("#formMessage");

// Выбор жанра игры
document.querySelectorAll("[data-game]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector("#gameType").value =
      button.dataset.game;

    document.querySelector("#order").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Выбор бюджета
document.querySelectorAll("[data-budget]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector("#budget").value =
      button.dataset.budget;

    document.querySelector("#order").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Обработка заказа
form.addEventListener("submit", event => {
  event.preventDefault();

  const projectName =
    document.querySelector("#projectName").value.trim();

  const gameType =
    document.querySelector("#gameType").value;

  const idea =
    document.querySelector("#idea").value.trim();

  const budget =
    document.querySelector("#budget").value;

  const deadline =
    document.querySelector("#deadline").value;

  const clientEmail =
    document.querySelector("#clientEmail").value.trim();

  if (!idea || !clientEmail) {
    message.textContent =
      "Заполни описание игры и свой email.";
    return;
  }

  const subject = `Заказ Roblox-игры: ${projectName || gameType}`;

  const body = `
НОВЫЙ ЗАКАЗ 

Название: ${projectName || "Не указано"}
Тип игры: ${gameType}
Описание: ${idea}
Бюджет: ${budget}
Срок: ${deadline}
Email клиента: ${clientEmail}
  `.trim();

  const mailto =
    `mailto:${OWNER_EMAIL}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  message.textContent =
    "Открываем почту. Нажми «Отправить», чтобы передать заказ.";

  window.location.href = mailto;
});
