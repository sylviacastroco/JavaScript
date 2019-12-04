const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
  //hide tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  //mark tabs as unselected
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });

  //mark this tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  //find associate tabPanel and show it
  const { id } = event.currentTarget;
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
