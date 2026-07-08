chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getJobDetails") {
    const details = scrapePage();
    sendResponse(details);
  }
  return true;
});

function scrapePage() {
  const url = window.location.href;
  let company = "";
  let role = "";
  let cleanUrl = url;

  if (url.includes("linkedin.com")) {
    const titleEl = document.querySelector(
      "h1.t-24, .job-details-jobs-unified-top-card__job-title, .jobs-unified-top-card__job-title, h1"
    );
    if (titleEl) {
      role = titleEl.innerText.trim();
    }

    const companyLinkEl = document.querySelector(
      '.job-details-jobs-unified-top-card__company-name a, a[href*="/company/"]'
    );
    if (companyLinkEl) {
      company = companyLinkEl.innerText.trim();
    } else {
      const companyEl = document.querySelector(
        ".job-details-jobs-unified-top-card__company-name, .jobs-unified-top-card__company-name"
      );
      if (companyEl) {
        company = companyEl.innerText.split("\n")[0].split("·")[0].trim();
      }
    }

    let jobId = "";
    try {
      const urlObj = new URL(url);
      if (urlObj.searchParams.has("currentJobId")) {
        jobId = urlObj.searchParams.get("currentJobId");
      } else {
        const match = url.match(/\/jobs\/view\/(\d+)/);
        if (match) {
          jobId = match[1];
        }
      }
    } catch (e) {}

    if (jobId) {
      cleanUrl = `https://www.linkedin.com/jobs/view/${jobId}/`;
    }
  }
  else if (url.includes("greenhouse.io")) {
    const titleEl = document.querySelector(".app-title, h1.app-title");
    if (titleEl) {
      role = titleEl.innerText.trim();
    }
    const companyEl = document.querySelector(".company-name, span.company-header");
    if (companyEl) {
      company = companyEl.innerText.replace("at ", "").trim();
    }
  }

  if (!role) {
    const h1 = document.querySelector("h1");
    role = h1 ? h1.innerText.trim() : document.title.split("-")[0].trim();
  }
  if (!company) {
    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteName) {
      company = ogSiteName.getAttribute("content");
    } else {
      company = document.title.split("at")[1] || document.title.split("|")[1] || "";
      company = company.trim();
    }
  }

  return {
    company: company || "Unknown Company",
    role: role || "Unknown Role",
    url: cleanUrl
  };
}
