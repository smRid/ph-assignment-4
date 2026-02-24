let totalCountElement = document.getElementById("overall-total-count");


let allJobCards = document.getElementsByClassName("single-job-card");

function updateTotalCount() {
    totalCountElement.innerText = allJobCards.length;
}

updateTotalCount();

const allToggleBtn = document.getElementById("filter-btn-all");
const interviewToggleBtn = document.getElementById("filter-btn-interview");
const rejectedToggleBtn = document.getElementById("filter-btn-rejected");

function switchFilter(clickedBtnId) {
    console.log("Filter button clicked:", clickedBtnId);
    allToggleBtn.classList.remove("bg-blue-600", "text-white");
    interviewToggleBtn.classList.remove("bg-blue-600", "text-white");
    rejectedToggleBtn.classList.remove("bg-blue-600", "text-white");

    allToggleBtn.classList.add("bg-gray-100", "text-gray-700");
    interviewToggleBtn.classList.add("bg-gray-100", "text-gray-700");
    rejectedToggleBtn.classList.add("bg-gray-100", "text-gray-700");
    const currentBtn = document.getElementById(clickedBtnId);

    currentBtn.classList.remove("bg-gray-100", "text-gray-700");

    currentBtn.classList.add("bg-blue-600", "text-white");
}
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
}
