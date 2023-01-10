const sidebarMenuButton = document.querySelector('.gnb-icon-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function openSidebar() {
  sidebar.classList.add('is-active');
  overlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar);

function closeSidebar() {
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
}

overlay.addEventListener('click', closeSidebar);

const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');
// querySelector는 조건을 만족하는 애 맨 앞에 있는 거 딱 하나만 갖고 온다. 그래서
// querySelectorAll로 바뀌어야 한다.

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle('is-open');
}

drawerMenuButtonList.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', toggleDrawerMenu);
})
