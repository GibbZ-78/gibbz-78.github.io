/*********************************************/
/*                                           */
/*        Google search page THPized         */
/*                                           */
/*                google.js                  */
/*                                           */
/*            (c) 2022 JB Vidal              */
/*         THP Développeur Hiver 22          */
/*                                           */
/*********************************************/

// Display & hide Google Search setup menu
gLinkToToggleMenu = document.getElementById("gSetupMenu");
gToggleMenu = document.getElementById("hidden_menu");

gLinkToToggleMenu.addEventListener("click", () => {
  if(getComputedStyle(gToggleMenu).display != "none"){
    gToggleMenu.style.display = "none";
  } else {
    gToggleMenu.style.display = "inline-block";
  }
})

// Display & hide (using opacity, surely not the best option though) the "X" icon depending on search box being empty or not
gMyInput = document.getElementById("gInputSearch");
gMyIcon = document.getElementById("gMyCloseIcon");

gMyInput.addEventListener("input", () => {
  if (gMyInput.value != "")
    gMyIcon.style.opacity = "75%";
  else gMyIcon.style.opacity = "0%";
})

// Clear the search box when clicking the "X" icon on its right
gMyIcon.addEventListener("click", () => {
  if (gMyIcon.style.opacity != "0%")
    gMyInput.value="";
})

/********************************************/
/*                                          */
/*               END OF CODE                */
/*                                          */
/********************************************/
