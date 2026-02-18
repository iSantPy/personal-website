const projects = {
    "crypto-elt": {
        title: "Crypto Data ELT Pipeline",
        description: `
            End-to-end ELT pipeline that ingests cryptocurrency market data from
            Gecko's API, loads it into BigQuery, and prepares it for analytics
            and visualization. Built with Python and cloud-native components.
        `,
        youtube: "https://www.youtube.com/embed/TU_VIDEO_ID",
        github: "https://github.com/iSantPy/crypto-data-pipeline"
    },
    "excel-report-automation": {
        title: "Excel Report Automation",
        description: `
            Python automation project to generate and maintain Excel reports,
            reducing manual work and improving data consistency.
        `,
        youtube: "https://www.youtube.com/embed/TU_VIDEO_ID",
        github: "https://github.com/iSantPy/Excel_Automation"
    },
    "large-scale-webscraping": {
        title: "Large-Scale WebScraping",
        description: `
            Large-scale webscraping to update production database.
        `,
        youtube: "https://www.youtube.com/embed/TU_VIDEO_ID",
        github: "https://github.com/iSantPy"
    },
    "crypto-dashboard": {
        title: "Crypto Dashboard",
        description: `
            Crypto dashboard and main metrics.
        `,
        youtube: "https://www.youtube.com/embed/TU_VIDEO_ID",
        github: "https://github.com/iSantPy"
    }
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

if (projects[projectId]) {
    document.getElementById("project-title").textContent =
        projects[projectId].title;

    document.getElementById("project-description").textContent =
        projects[projectId].description;

    document.getElementById("project-video").src =
        projects[projectId].youtube;

    document.getElementById("github-link").href =
        projects[projectId].github;
}