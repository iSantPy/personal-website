const projects = {
    "crypto-elt": {
        title: "Crypto Data ELT Pipeline",
        description: `
            <h3>Project Objective</h3>
            <p>
                The goal of this project was to design a scalable and reliable data
                ingestion pipeline capable of collecting cryptocurrency market data
                from external APIs and making it analytics-ready with minimal
                latency and operational overhead.
            </p>

            <h3>Architecture Overview</h3>
            <p>
            The architecture is intentionally designed to <strong>leverage BigQuery’s optimized analytics engine</strong> as the core analytical layer, prioritizing <strong>in-platform computation</strong> over external processing. By delegating <strong>data transformations</strong>, <strong>aggregations</strong>, and <strong>metric calculations</strong> directly to <strong>BigQuery</strong>, the pipeline avoids the need for <strong>heavy analytical dependencies in Python</strong>.
            </p>

            <p>
            As a result, the <strong>Dockerized VM</strong> remains <strong>lightweight</strong> and focused on <strong>orchestration and ingestion</strong>, rather than computation. This design choice reduces <strong>container complexity</strong>, minimizes <strong>resource consumption</strong>, and aligns with a <strong>low-impact, cost-efficient cloud architecture</strong> that maximizes <strong>native GCP capabilities</strong>.
            </p>

            <p>
            Additionally, performing analytics directly in <strong>BigQuery</strong> enables the pipeline to be <strong>fully idempotent</strong>, ensuring <strong>safe reprocessing</strong> without <strong>data duplication</strong> or <strong>integrity issues</strong>. This approach strengthens <strong>data reliability</strong> while simplifying <strong>recovery and re-execution strategies</strong>, providing a <strong>robust and scalable foundation</strong> for <strong>end-to-end data workflows</strong>.
            </p>

            <h3>Why ELT Instead of ETL?</h3>
            <ul>
                <li>BigQuery is optimized for large-scale analytical transformations</li>
                <li>Transformations can evolve without re-ingesting raw data</li>
                <li>Simpler ingestion layer focused on reliability and speed</li>
                <li>Lower operational complexity compared to traditional ETL tools</li>
            </ul>

            <h3>Key Features</h3>
            <ul>
                <li>Automated data ingestion from CoinGecko API</li>
                <li>Cloud-native ELT architecture deployed as a Cloud Run service</li>
                <li>Partitioned and optimized BigQuery tables</li>
                <li>CI/CD with GitHub for automated deployments</li>
            </ul>

            <h3>Design Decisions</h3>
            <ul>
                <li><strong>Cloud Run:</strong> chosen for its serverless scaling and low maintenance</li>
                <li><strong>BigQuery:</strong> used as both raw storage and analytics engine</li>
                <li><strong>Docker:</strong> ensures reproducible builds and deployments</li>
                <li><strong>GitHub CI/CD:</strong> enables fast and safe iteration</li>
            </ul>

            <h3>Tech Stack</h3>
            <p>Python, Google Cloud Run, BigQuery, Docker, GitHub</p>

            <h3>Outcome & Use Case</h3>
            <p>
                This pipeline serves as the core data ingestion layer for downstream
                analytics and dashboards, enabling near real-time insights into
                cryptocurrency market trends while remaining cost-efficient and
                easy to extend.
            </p>
        `,
        youtube: "https://www.youtube.com/embed/J7wNt19CQXc",
        github: "https://github.com/iSantPy/crypto-data-pipeline"
    },

    "large-scale-webscraping": {
        title: "Large-Scale Async Web Scraping",
        description: `
            <p>
                Large-scale asynchronous web scraping platform designed to continuously
                collect, validate, and update production datasets from multiple external
                sources in a scalable and fault-tolerant manner.
            </p>

            <h3>Project Objective</h3>
            <p>
                The primary goal of this project is to provide a <strong>reliable</strong>,
                <strong>high-throughput</strong>, and <strong>cost-efficient</strong> data
                ingestion layer capable of handling large volumes of external web data
                while minimizing operational overhead and infrastructure complexity.
            </p>

            <h3>Architecture Overview</h3>
            <p>
                The system is built around a <strong>fully asynchronous scraping architecture</strong>
                using <strong>aiohttp</strong>, allowing the scraper to handle thousands of concurrent
                requests with minimal CPU and memory consumption. A <strong>dynamic proxy rotation
                strategy</strong> is employed to mitigate <strong>rate limits</strong> and
                <strong>IP blocking</strong>, ensuring stability when interacting with
                high-protection websites.
            </p>

            <h3>Design Decisions & Trade-offs</h3>
            <p>
                By deploying the scraper as a <strong>containerized Cloud Run service</strong>,
                the solution leverages <strong>serverless execution</strong>, <strong>automatic scaling</strong>,
                and <strong>pay-per-use billing</strong>, avoiding the need to manage persistent VMs
                or long-running infrastructure. Data persistence and validation are delegated to
                <strong>BigQuery</strong>, allowing the scraping layer to remain lightweight and focused
                exclusively on extraction logic, reducing container size and operational costs.
            </p>

            <h3>Key Features</h3>
            <ul>
                <li>High-throughput asynchronous scraping with aiohttp</li>
                <li>Dynamic proxy rotation to bypass rate limits and IP blocks</li>
                <li>Requests-based fallback for non-async-compatible endpoints</li>
                <li>Containerized deployment using Docker and Cloud Run</li>
                <li>Automated CI/CD pipelines using Azure DevOps</li>
                <li>Validated and analytics-ready data stored in BigQuery</li>
            </ul>

            <h3>Tech Stack</h3>
            <p>
                Python, aiohttp, requests, Docker, Google Cloud Run,
                BigQuery, Azure DevOps
            </p>

            <h3>Use Case</h3>
            <p>
                This platform enables organizations to maintain <strong>up-to-date production datasets</strong>
                sourced from external websites, supporting downstream analytics, monitoring, and
                decision-making processes without manual intervention or infrastructure maintenance.
            </p>
        `,
        youtube: "https://www.youtube.com/embed/S4gV_Mjoc_k",
        github: "https://github.com/iSantPy"
    },

    "crypto-dashboard": {
        title: "Crypto Analytics Dashboard",
        description: `
            <p>
                Analytics dashboard built on top of <strong>BigQuery</strong> datasets generated
                by the Crypto ELT pipeline, designed to transform raw market data into
                <strong>actionable insights</strong> through clean, scalable, and
                business-oriented visualizations.
            </p>

            <h3>Project Objective</h3>
            <p>
                The objective of this project is to provide stakeholders and analysts with a
                <strong>single source of truth</strong> for cryptocurrency market data,
                enabling fast exploration of trends, historical performance, and key metrics
                without requiring direct interaction with raw datasets or complex SQL logic.
            </p>

            <h3>Architecture Overview</h3>
            <p>
                The dashboard consumes <strong>analytics-ready datasets</strong> stored in
                <strong>BigQuery</strong>, which acts as both the <strong>storage</strong> and
                <strong>analytical engine</strong>. By connecting Power BI directly to BigQuery,
                the solution leverages BigQuery’s optimized execution engine for aggregations
                and filtering, avoiding data duplication and unnecessary data movement.
            </p>

            <h3>Data Modeling Strategy</h3>
            <p>
                The underlying datasets are modeled using a <strong>Star Schema</strong>,
                where <strong>fact tables</strong> capture core market metrics such as prices,
                volumes, and market capitalization, while <strong>dimension tables</strong>
                represent assets, time, and markets. This modeling approach simplifies BI logic,
                improves query performance, and enables consistent metric definitions across
                all dashboard views.
            </p>

            <h3>Design Decisions & Trade-offs</h3>
            <p>
                By delegating heavy aggregations and calculations to <strong>BigQuery</strong>,
                the dashboard layer remains lightweight and focused on visualization rather
                than data processing. This approach reduces model complexity in Power BI,
                improves refresh performance, and ensures that analytical logic is centralized
                in the data warehouse, making the solution more <strong>scalable</strong>,
                <strong>maintainable</strong>, and <strong>cost-efficient</strong> over time.
            </p>

            <h3>Key Features</h3>
            <ul>
                <li>Direct connection to BigQuery as the analytics layer</li>
                <li>Star-schema-based data model for optimized BI performance</li>
                <li>Historical and trend-based crypto market metrics</li>
                <li>Clean, business-focused dashboards designed for decision-making</li>
            </ul>

            <h3>Tech Stack</h3>
            <p>
                BigQuery, Power BI
            </p>

            <h3>Use Case</h3>
            <p>
                Enables analysts and business stakeholders to explore crypto market behavior,
                track trends over time, and make <strong>data-driven decisions</strong> using
                reliable, cloud-scale datasets powered by an end-to-end ELT architecture.
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