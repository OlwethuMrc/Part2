/* The Blade Barbershope location/map */

function initMap() {
    // Coordinates for 17 Bryston Dr, Rosebank
    const storeLocation = { lat: -26.1467, lng: 28.0416 };

    // Initialize the Google Map centered on the store
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: storeLocation,
        mapTypeControl: true,
        streetViewControl: false
    });

    // Info Window content matching the store card details
    const storeContent = `
        <div style="font-family: sans-serif; padding: 5px; text-align: center;">
            <h4 style="color: #5c4033; margin: 0 0 5px 0;">The Blade Barbershop</h4>
            <p style="margin: 0; font-size: 0.9rem;"><strong>Our store</strong></p>
            <p style="margin: 3px 0; font-size: 0.85rem;">17 Bryston Dr, Rosebank</p>
            <p style="margin: 0; font-size: 0.8rem; color: #555;">Mon - Sat: 8:00 AM - 6:00 PM</p>
        </div>
    `;

    const infoWindow = new google.maps.InfoWindow();

    // Add marker for the store location
    const storeMarker = new google.maps.Marker({
        position: storeLocation,
        map: map,
        title: "The Blade Barbershop - Rosebank"
    });

    storeMarker.addListener("click", function () {
        infoWindow.setContent(storeContent);
        infoWindow.open(map, storeMarker);
    });
}