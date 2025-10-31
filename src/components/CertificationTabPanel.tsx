import type {Certification} from "../types/Certification.tsx";
import aws from "../assets/aws-cloud-cert.png";
import security from "../assets/security-cert.png";


interface TabPanelProps {
    children: Certification;
    index: any;
    value: any;
}

function DisplayImage(name: any) {
    switch (name.name) {
        case "CompTIA Security+":
            return <img src={security} className="certification" alt="AWS Certification"/>;
        case "AWS Certified Cloud Practitioner":
            return <img src={aws} className="certification" alt="AWS Certification"/>;
        default:
            return <div>Please select an option.</div>;
    }
}

export default function CertificationTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`certification-tabpanel-${index}`}
            aria-labelledby={`certification-tab-${index}`}
            key={index || "none"}
            {...other}
        >
            {value === index &&
                <DisplayImage name={children.name}/>
            }
        </div>
    );
}