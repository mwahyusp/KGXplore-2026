// Modal Control Logic for Creative Marketing Conversion Flow
const modal = document.getElementById("registerModal");

function openModal(triggerSource) {
    modal.style.display = "flex";
    // Simulated Marketing Tracker Input
    logMarketingInteraction("Modal Open", triggerSource);
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside content box
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Marketing Product Analytics Simulator (Tracking Ads/Publisher Clicks)
function logMarketingInteraction(actionType, elementId) {
    const trackingPayload = {
        event: "marketing_lead_interaction",
        action: actionType,
        targetElement: elementId,
        timestamp: new Date().toISOString(),
        viewport: `${window.innerWidth}x${window.innerHeight}`
    };
    
    // Simulating transmission to an Advertising Data Pipeline or Google Analytics
    console.group("📊 KG Media Ads Tracker - Activity Logged");
    console.log("Action Type :", trackingPayload.action);
    console.log("Target Item :", trackingPayload.targetElement);
    console.log("Timestamp   :", trackingPayload.timestamp);
    console.log("Full Payload:", trackingPayload);
    console.groupEnd();
}

// Attach Event Listeners to all interactive Bento Grid Track Buttons
document.querySelectorAll('.track-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const itemTarget = e.target.getAttribute('data-item');
        logMarketingInteraction("Click Dynamic Highlight", itemTarget);
        alert(`Thank you for your interest in: ${itemTarget}! Interaction logged.`);
    });
});

// Navigation CTA Event
document.getElementById('navRegisterBtn').addEventListener('click', () => {
    openModal("Navbar Fixed CTA");
});

// Form Submission Simulation
document.getElementById('regForm').addEventListener('submit', (e) => {
    e.preventDefault();
    logMarketingInteraction("Form Submitted Successfully", "Registration Form");
    alert("Registration Successful! See you at KGXplore 2026.");
    closeModal();
});