import type {School} from "../types/School.tsx";

// This will be a database call in the future
export const schoolList: School[] = [
    {
        schoolName: "Arizona State University",
        degreeType: "Master of Science",
        degreeName: "Computer Science",
        minor: "",
        location: "Remote",
        descriptions: ["Completed via online classes while working full time at RTX.",
            "Classes included security, AI learning patterns, algorithms, leadership and management."],
        startDate: "05/2020",
        endDate: "08/2023",
        },
    {
        schoolName: "Revature",
        degreeType: "Full Stack Development",
        degreeName: "Bootcamp",
        minor: "",
        location: "Reston, VA",
        descriptions: ["Converted monolithic system into a micro service ecosystem using Spring Boot and Angular.",
            "Utilized Spring MVC to streamline Java logic and data transfer to and from Angular.",
            "Used Hibernate to store and access data on an Oracle AWS database instance.",
            "Developed web application using Angular 5 following the Restful format."],
        startDate: "02/2018",
        endDate: "06/2018",
    },
    {
        schoolName: "Idaho State University",
        degreeType: "Bachelor of Science",
        degreeName: "Computer Science",
        minor: "",
        location: "Pocatello, ID",
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
        schoolName: "Colorado School of Mines",
        degreeType: "Bachelor of Science",
        degreeName: "Geophysical Engineering",
        minor: "Computer Science",
        location: "Golden, CO",
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