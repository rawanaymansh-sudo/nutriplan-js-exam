
export class Sidebar {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.sidebarOverlay = document.getElementById('sidebar-overlay');
        this.headerMenuBtn = document.getElementById('header-menu-btn')
        this.sidebarCloseBtn = document.getElementById('sidebar-close-btn');
        
        this.headerMenuBtn.addEventListener('click', () => {
            this.sidebar.classList.add('open');
            this.sidebarOverlay.classList.add('active');
        });
        this.sidebarCloseBtn.addEventListener('click', () => {
            this.closeSidebar();
        })
        this.sidebarOverlay.addEventListener('click', () => {
            this.closeSidebar();
        })

    }
    closeSidebar() {
        this.sidebar.classList.remove('open');
        this.sidebarOverlay.classList.remove('active');
    }
}