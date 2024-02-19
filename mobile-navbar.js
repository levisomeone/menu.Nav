class Mobile-Navbar {
    constructor(MobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(Mobile-Menu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = ;
    }
    
    addClickEvent() {
        this.mobileMenu.addEvenListener("click, () => console.log
            ("Hello:)"));  
    }
   
   init()  {
       if (this.mobileMenu) {
           this.addClickEvent();
       }
       return this;
   }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
  );
mobileNavbar.init();
