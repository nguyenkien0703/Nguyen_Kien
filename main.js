        const buyBtns = document.querySelectorAll(".js-buy-ticket");
        const modal = document.querySelector(".js-modal");
        const modalClose = document.querySelector(".js-modal-close");
        const modalContainer = document.querySelector(".js-modal-container");
        //hamf hiển thị modal mua vé
        function showBuyTickets() {
                modal.classList.add("open");
            }
            //hàm ẩn modakl mua vé
        function hideBuyTickets() {
                modal.classList.remove("open");
            }
            // lắng nghe sự kiện mua vé
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener("click", showBuyTickets);
        }
        modalClose.addEventListener("click", hideBuyTickets);
        modal.addEventListener("click", hideBuyTickets);
        modalContainer.addEventListener("click", function(event) {
            event.stopPropagation();
        });
        //ẩn hiện menu khi click vào 

        var header = document.getElementById('header')
        var mobileMenu = document.getElementById('mobile-menu')
        var currentHeight = header.clientHeight;
        mobileMenu.onclick = function() {
            var isClose = header.clientHeight == currentHeight;
            if (isClose) {
                header.style.height = 'auto';
            } else {
                header.style.height = null;

            }
        }



        //tự động đóng khi chọn menu
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];
            menuItem.onclick = function(event) {
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                if (!isParentMenu) {

                    header.style.height = null;
                } else {
                    event.preventDefault();

                }
            }
        }
