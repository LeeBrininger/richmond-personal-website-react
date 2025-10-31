import type {Job} from "../types/Job.tsx";

// This will be a database call in the future
export const jobList: Job[] = [
    {
        name: "Modus21",
        position: "Full Stack Software Engineer",
        location: "Charleston, SC",
        workType: "Remote",
        descriptions: ["Contract transferred from NexGen Data Systems to Modus21, stayed in the same role.",
            "Trained new employees in the codebase and helped set up environments.",
            "Created new JIRA tasks and produced release documentation.",
            "Created database migration scripts using Python."],
        startDate: "09/2025",
        endDate: "Current",
        },
    {
        name: "NexGen Data Systems",
        position: "Full Stack Software Developer",
        location: "Charleston, SC",
        workType: "Remote",
        descriptions: ["Developed and optimized a production web application using React, including editable " +
            "tables, conditional rendering, and reusable UI components, many of which utilize node.",
            "Engineered 5+ RESTful API endpoints in Spring Boot across 11 microservices.",
            "Integrated Spring Data JPA with native SQL queries, supporting data modifications across five " +
            "Dockerized relational databases.",
            "Implemented automated JUnit, Jest, and Cypress tests to maintain over 80% coverage in both " +
            "the presentation tier and the application tier.",
            "Implemented DevSecOps practices, utilizing a CI/CD pipeline to uphold coding standards, " +
            "prevent vulnerabilities, and enforce 80%+ test coverage when deploying through PaaS into a " +
            "cloud environment.",
            "Leveraged Fortify, SonarQube, and OWASP Dependency Check for vulnerability remediation " +
            "and secure coding standards.",
            "Troubleshot and resolved software defects in a timely manner through debugging techniques " +
            "and paired programming.",
            "Presented and collaborated with designers and customers to improve the functionality and " +
            "visuals of the application."],
        startDate: "02/2025",
        endDate: "09/2025",
    },
    {
        name: "RTX",
        position: "Senior Software Engineer",
        location: "Aurora, CO",
        workType: "On-Site",
        descriptions: ["On-call lead engineer for a system that was responsible for automating operational tasks and " +
            "routine testing; provided hands-on support, troubleshooting, operational updates, and " +
            "improvements.",
            "Developed software using an in-house foundational system made with C++ and Java.",
            "Additionally developed using C, JavaScript, and Kornshell.",
            "Performed technical and high-level presentations to management and potential investors.",
            "Mentored junior developers and trained backups.",
            "Software developer for command-and-control ground equipment, communications, and " +
            "management software written in Java.",
            "Worked with Kubernetes, Docker, and Fortify to deploy the system on a Linux VM and shared " +
            "cluster via a CI/CD pipeline.",
            "Performed backend Java development for 90% of the time and integration support for the rest.",
            "Deployed repos using Gradle; updated the build files to set up and change project " +
            "dependencies, both local and from Artifactory."],
        startDate: "03/2020",
        endDate: "02/2025",
    },
    {
        name: "Infosys",
        position: "Software Developer",
        location: "Minneapolis, MN",
        workType: "On-Site",
        descriptions: ["Full-stack developer for a Java servlet system hosted through IBM WebSphere, which generated " +
            "thousands of automated letters a day.",
            "Primary development engineer for a large-scale data migration of over a million objects.",
            "Produced PowerShell automations to download and sort thousands of documents.",
            "Onshore point of contact representing my team of over 10 people in stakeholder and " +
            "cross-team meetings."],
        startDate: "06/2018",
        endDate: "03/2020",
    },
]