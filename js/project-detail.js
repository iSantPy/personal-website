const projects = {
    "crypto-elt": {
        title: "Crypto Data ELT Pipeline",
        description: `
            <p>
                End-to-end ELT pipeline designed to ingest cryptocurrency market
                data from external APIs and load it into BigQuery as
                analytics-ready datasets.
            </p>

            <h3>Key Features</h3>
            <ul>
                <li>Automated data ingestion from CoinGecko API</li>
                <li>Cloud-native ELT architecture deployed as a Cloud Run service</li>
                <li>Partitioned and optimized BigQuery tables</li>
                <li>CI/CD with GitHub for automated deployments</li>
            </ul>

            <h3>Tech Stack</h3>
            <p>Python, Google Cloud Run, BigQuery, Docker, GitHub</p>

            <h3>Use Case</h3>
            <p>
                Serves as the core data ingestion layer powering downstream
                analytics and dashboards by providing reliable and
                up-to-date crypto market data.
            </p>
        `,
        youtube: "https://www.youtube.com/embed/J7wNt19CQXc",
        github: "https://github.com/iSantPy/crypto-data-pipeline"
    },

    "large-scale-webscraping": {
        title: "Large-Scale Async Web Scraping",
        description: `
            <p>
                Large-scale asynchronous web scraping system built to collect,
                validate, and continuously update production datasets from
                multiple external websites.
            </p>

            <h3>Key Features</h3>
            <ul>
                <li>Asynchronous scraping using aiohttp for high throughput</li>
                <li>Dynamic proxy rotation to avoid rate limits and blocks</li>
                <li>Fallback requests-based scraping for edge cases</li>
                <li>Containerized with Docker and deployed as a Cloud Run service</li>
                <li>Automated CI/CD using Azure DevOps</li>
                <li>Data stored and validated in BigQuery</li>
            </ul>

            <h3>Tech Stack</h3>
            <p>
                Python, aiohttp, requests, Docker, Azure DevOps,
                Google Cloud Run, BigQuery
            </p>

            <h3>Use Case</h3>
            <p>
                Keeps production datasets continuously updated by scraping
                large volumes of external data in a scalable and fault-tolerant
                manner.
            </p>
        `,
        youtube: "https://www.youtube.com/embed/S4gV_Mjoc_k",
        github: "https://github.com/iSantPy"
    },

    "crypto-dashboard": {
        title: "Crypto Analytics Dashboard",
        description: `
            <p>
                Analytics dashboard built on top of BigQuery datasets generated
                by the Crypto ELT pipeline, focused on market trends and key
                performance metrics.
            </p>

            <h3>Key Features</h3>
            <ul>
                <li>Direct connection to BigQuery as the analytics layer</li>
                <li>Historical and trend-based crypto metrics</li>
                <li>Clean and business-oriented visualizations</li>
                <li>Analytics-ready data modeled using a Star Schema</li>
            </ul>

            <h3>Data Modeling</h3>
            <p>
                The underlying datasets are modeled using a <strong>Star Schema</strong>,
                with fact tables capturing market metrics (prices, volumes, market caps)
                and dimension tables representing time, assets, and markets. This design
                enables efficient querying, simplified BI logic, and high-performance
                dashboards.
            </p>

            <h3>Tech Stack</h3>
            <p>BigQuery, Power BI</p>

            <h3>Use Case</h3>
            <p>
                Enables stakeholders and analysts to explore crypto market data,
                track trends, and make data-driven decisions using reliable
                cloud-scale datasets.
            </p>
        `,
        youtube: "https://www.youtube.com/embed/1XivdImBuXI",
        github: "https://github.com/iSantPy"
    }
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

if (projects[projectId]) {
    document.getElementById("project-title").textContent =
        projects[projectId].title;

    document.getElementById("project-description").innerHTML =
        projects[projectId].description;

    document.getElementById("project-video").src =
        projects[projectId].youtube;

    document.getElementById("github-link").href =
        projects[projectId].github;
}