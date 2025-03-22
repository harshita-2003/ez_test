import Form from "../components/Ezform";
import "../styles/Form.css";
import ezLogo from "../assets/ez.png";
import { IconChartBar, IconVideo, IconWorld, IconBrush, IconReport, IconDatabase, IconVideoPlus, IconPresentationAnalytics, IconZoomIn, IconFileAnalytics, IconDeviceDesktopAnalytics } from "@tabler/icons-react";


const services = [
    { title: "Presentation Design", icon: <IconPresentationAnalytics size={40} /> },
    { title: "Audio - Visual Production", icon: <IconVideoPlus size={40} /> },
    { title: "Translation Services", icon: <IconWorld size={40} /> },
    { title: "Graphic Design", icon: <IconDeviceDesktopAnalytics size={40} /> },
    { title: "Research & Analytics", icon: <IconZoomIn size={40} /> },
    { title: "Data Processing", icon: <IconFileAnalytics size={40} /> }
];

const FormPage = () => {
    return (
        <div className="form-page">
            <div className="left-section">
                <div className="logo-section">
                    <img src={ezLogo} alt="ez logo" className="logo" /> 
                    <span className="highlight">Works</span>
                </div>
                <p className="subtitle">Suite Of Business Support Services</p>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... dnf do ksfing tempor incididunt
                    consectetur adipiscing elit dolor sit amet consectetur
                </p>
                <Form />
            </div>

            <div className="right-section">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="card_icon">
                            <span className="service-icon">{service.icon}</span>
                            <h3 className="service-title">{service.title}</h3>
                        </div>
                        <p className="service-description">
                            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormPage;
