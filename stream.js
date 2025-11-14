// Language toggle
const langToggleBtn = document.getElementById("langToggle");
langToggleBtn.addEventListener("click", () => {
  document.querySelectorAll(".eng").forEach(el => el.classList.toggle("hidden"));
  document.querySelectorAll(".hin").forEach(el => el.classList.toggle("hidden"));
  langToggleBtn.textContent = langToggleBtn.textContent.includes("Hindi")
    ? "🌐 English"
    : "🌐 Hindi";
});

// Navigation for stream buttons
function navigateTo(page) {
  window.location.href = page;
}
document.getElementById("science").addEventListener("click",function(){
        windows.location.href = "science.html";
    })
    document.getElementById("commerece").addEventListener("click",function(){
        windows.location.href = "commerce.html";
    })
    document.getElementById("arts").addEventListener("click",function(){
        windows.location.href = "arts.html";
    })
    document.getElementById("vocational").addEventListener("click",function(){
        windows.location.href = "vocational.html";
    })
    document.getElementById("agriculture").addEventListener("click",function(){
        windows.location.href = "agriculture.html";
    })
    document.getElementById("literature").addEventListener("click",function(){
        windows.location.href = "literature.html";
    })