/* ==========================================================================
   Lightbox JavaScript Functionality
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
    // 1. Create and inject modal container structure into the body
    const modal = document.createElement("div");
    modal.className = "lightbox-modal";
    modal.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" id="lightbox-img" alt="Enlarged View">
        <div class="lightbox-caption" id="lightbox-caption"></div>
    `;
    document.body.appendChild(modal);

    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = modal.querySelector(".lightbox-close");

    // 2. Select all images with the gallery-img class
    const galleryImages = document.querySelectorAll(".gallery-img");

    // 3. Open lightbox when an image is clicked
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            lightboxImg.src = this.src;
            lightboxCaption.innerText = this.alt;
        });
    });

    // 4. Close modal when clicking the 'X' button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 5. Close modal when clicking anywhere outside the image
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // 6. Close modal with the Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
});