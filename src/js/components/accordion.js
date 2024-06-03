export const accordion = () => {
  // Получаем все элементы с классом .accordion-list
  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach((accordionList) => {
    // Обработчик события клика по элементам внутри .accordion-list
    accordionList.addEventListener('click', (event) => {
      // Получаем текущий элемент списка аккордеона
      const accordionItem = event.currentTarget;

      // Получаем элемент управления аккордеоном (кнопка/ссылка)
      const accordionControl = event.target.closest('.accordion-list__control');

      // Проверяем, кликнули ли по элементу управления
      if (!accordionControl) return;

      // Получаем элемент контента аккордеона
      const accordionContent = accordionControl.nextElementSibling;

      // Получаем уже открытый элемент аккордеона (если есть)
      const accordionOpenedItem = accordionList.querySelector(
        '.accordion-list__item--opened',
      );
      const accordionOpenedContent =
        accordionOpenedItem &&
        accordionOpenedItem.querySelector('.accordion-list__content');

      // Если открыт другой элемент, закрываем его
      if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }

      // Переключаем класс открытия у текущего элемента
      accordionItem.classList.toggle('accordion-list__item--opened');

      // Развернуть/Свернуть контент
      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
};
