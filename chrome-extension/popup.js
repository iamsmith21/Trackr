const API_URL = "http://localhost:3001/api";

document.addEventListener("DOMContentLoaded", async () => {
  const authScreen = document.getElementById("auth-screen");
  const clipperScreen = document.getElementById("clipper-screen");
  const loginForm = document.getElementById("login-form");
  const clipperForm = document.getElementById("clipper-form");
  const statusDiv = document.getElementById("status");

  function showStatus(text, type) {
    statusDiv.innerText = text;
    statusDiv.className = `status-msg ${type}`;
    statusDiv.style.display = "block";
    setTimeout(() => {
      statusDiv.style.display = "none";
    }, 4000);
  }

  chrome.storage.local.get(["token"], async (result) => {
    if (result.token) {
      authScreen.classList.remove("active");
      clipperScreen.classList.add("active");
      await loadScrapedData();
    } else {
      clipperScreen.classList.remove("active");
      authScreen.classList.add("active");
    }
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-pass").value;

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (data.success) {
        chrome.storage.local.set({ token: data.token }, async () => {
          showStatus("Logged in successfully!", "success");
          authScreen.classList.remove("active");
          clipperScreen.classList.add("active");
          await loadScrapedData();
        });
      } else {
        showStatus(data.message || "Invalid credentials", "error");
      }
    } catch (err) {
      showStatus("Could not connect to backend server.", "error");
    }
  });

  async function loadScrapedData() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (!activeTab) return;

      document.getElementById("job-url").value = activeTab.url || "";

      chrome.tabs.sendMessage(
        activeTab.id,
        { action: "getJobDetails" },
        (response) => {
          if (chrome.runtime.lastError || !response) {
            document.getElementById("job-company").value = "";
            document.getElementById("job-role").value = "";
            return;
          }

          document.getElementById("job-company").value = response.company || "";
          document.getElementById("job-role").value = response.role || "";
          document.getElementById("job-url").value = response.url || activeTab.url;
        }
      );
    });
  }

  clipperForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const company = document.getElementById("job-company").value;
    const role = document.getElementById("job-role").value;
    const jobUrl = document.getElementById("job-url").value;
    const notes = document.getElementById("job-notes").value;

    chrome.storage.local.get(["token"], async (result) => {
      const token = result.token;
      if (!token) {
        showStatus("Session expired. Please log in again.", "error");
        clipperScreen.classList.remove("active");
        authScreen.classList.add("active");
        return;
      }

      try {
        const response = await fetch(`${API_URL}/jobs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ company, role, jobUrl, notes, status: "applied" })
        });

        const data = await response.json();
        if (response.ok) {
          showStatus("Job added successfully!", "success");
          document.getElementById("job-notes").value = "";
        } else {
          showStatus(data.message || "Failed to add job", "error");
        }
      } catch (err) {
        showStatus("Error posting to database server.", "error");
      }
    });
  });
});
