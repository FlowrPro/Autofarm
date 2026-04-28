// Store references to all opened windows
const openedWindows = {};
const gameURL = "https://www.crazygames.com/game/bloxdhop-io?czy_invite=true&utm_source=invite&g=classic&lobby=%F0%9F%A9%B8%F0%9F%A9%B8lifesteal%F0%9F%98%88";

// Open all 5 windows
function openAllWindows() {
    for (let i = 1; i <= 5; i++) {
        if (!openedWindows[i] || openedWindows[i].closed) {
            const windowName = `bloxd-account-${i}`;
            openedWindows[i] = window.open(gameURL, windowName, "width=800,height=600,left=" + (i * 100) + ",top=" + (i * 50));
            
            if (!openedWindows[i]) {
                alert("Pop-up blocked! Please allow pop-ups for this site.");
                return;
            }
        }
    }
    updateStatus();
    console.log("Opened all 5 accounts");
}

// Reload all open windows
function reloadAllWindows() {
    let reloadCount = 0;
    for (let i = 1; i <= 5; i++) {
        if (openedWindows[i] && !openedWindows[i].closed) {
            openedWindows[i].location.reload();
            reloadCount++;
        }
    }
    console.log(`Reloaded ${reloadCount} account(s)`);
    alert(`Reloaded ${reloadCount} account window(s)`);
}

// Close all windows
function closeAllWindows() {
    let closedCount = 0;
    for (let i = 1; i <= 5; i++) {
        if (openedWindows[i] && !openedWindows[i].closed) {
            openedWindows[i].close();
            closedCount++;
        }
    }
    updateStatus();
    console.log(`Closed ${closedCount} account(s)`);
}

// Update status display
function updateStatus() {
    let openCount = 0;
    let windowList = "";
    
    for (let i = 1; i <= 5; i++) {
        if (openedWindows[i] && !openedWindows[i].closed) {
            openCount++;
            windowList += `<span class="window-item">Account ${i} ✓</span>`;
        }
    }
    
    document.getElementById("window-count").textContent = openCount;
    document.getElementById("window-list").innerHTML = windowList || "<em style='color: #999;'>No windows open yet</em>";
}

// Check window status periodically
setInterval(updateStatus, 2000);
