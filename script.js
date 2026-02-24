// Header stat counters
let totalCountElement = document.getElementById("overall-total-count");
let interviewCountElement = document.getElementById("interview-count");
let rejectedCountElement = document.getElementById("rejected-count");

// Get all job cards by their class name
let allJobCards = document.getElementsByClassName("single-job-card");

// Filter buttons
const allToggleBtn = document.getElementById("filter-btn-all");
const interviewToggleBtn = document.getElementById("filter-btn-interview");
const rejectedToggleBtn = document.getElementById("filter-btn-rejected");

function updateTotalCount() {
    totalCountElement.innerText = allJobCards.length;
}

updateTotalCount();


// Interview & Rejected counters

function updateStatusCounts() {

    let interviewTotal = 0;
    let rejectedTotal = 0;

    let allCards = document.getElementsByClassName("single-job-card");

    for (let i = 0; i < allCards.length; i++) {
        let badge = allCards[i].querySelector(".status-badge");

        if (badge.innerText.trim() === "INTERVIEW") {
            interviewTotal = interviewTotal + 1;
        } else if (badge.innerText.trim() === "REJECTED") {
            rejectedTotal = rejectedTotal + 1;
        }
    }

    // Update the header numbers
    interviewCountElement.innerText = interviewTotal;
    rejectedCountElement.innerText = rejectedTotal;
}


// Filter cards (show only matching ones)

function applyFilter(filterType) {
    let allCards = document.getElementsByClassName("single-job-card");

    for (let i = 0; i < allCards.length; i++) {
        let badge = allCards[i].querySelector(".status-badge");
        let badgeText = badge.innerText.trim();

        if (filterType === "all") {

            allCards[i].style.display = "block";
        } else if (filterType === "interview") {
            if (badgeText === "INTERVIEW") {
                allCards[i].style.display = "block";
            } else {
                allCards[i].style.display = "none";
            }
        } else if (filterType === "rejected") {
            if (badgeText === "REJECTED") {
                allCards[i].style.display = "block";
            } else {
                allCards[i].style.display = "none";
            }
        }
    }
}

let activeFilter = "all";


// Toggle the filter buttons

function switchFilter(clickedBtnId) {

    allToggleBtn.classList.remove("bg-blue-600", "text-white");
    interviewToggleBtn.classList.remove("bg-blue-600", "text-white");
    rejectedToggleBtn.classList.remove("bg-blue-600", "text-white");

    allToggleBtn.classList.add("bg-gray-100", "text-gray-700");
    interviewToggleBtn.classList.add("bg-gray-100", "text-gray-700");
    rejectedToggleBtn.classList.add("bg-gray-100", "text-gray-700");

    const currentBtn = document.getElementById(clickedBtnId);
    currentBtn.classList.remove("bg-gray-100", "text-gray-700");
    currentBtn.classList.add("bg-blue-600", "text-white");

    if (clickedBtnId === "filter-btn-all") {
        activeFilter = "all";
    } else if (clickedBtnId === "filter-btn-interview") {
        activeFilter = "interview";
    } else if (clickedBtnId === "filter-btn-rejected") {
        activeFilter = "rejected";
    }

    applyFilter(activeFilter);
}


// Update counts on click

function updateStatus(button, badgeId, action) {
    const statusBadge = document.getElementById(badgeId);
    statusBadge.innerText = button.innerText;

    statusBadge.classList.remove(
        "bg-gray-200",
        "text-gray-700",
        "bg-green-100",
        "text-green-700",
        "bg-red-500",
        "text-red-600",
        "border",
        "border-green-500",
        "border-red-500"
    );

    if (action === "interview") {
        statusBadge.classList.add("border", "border-green-500", "text-green-600");
    } else if (action === "rejected") {
        statusBadge.classList.add("border", "border-red-500", "text-red-600");
    }

    updateStatusCounts();
    applyFilter(activeFilter);
}
