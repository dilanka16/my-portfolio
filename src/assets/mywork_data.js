import project1_img from '../assets/project_1.svg';
import project2_img from '../assets/project_2.svg';
import project3_img from '../assets/project_3.svg';
import project4_img from '../assets/project_4.svg';
import project5_img from '../assets/project_5.svg';
import project6_img from '../assets/project_6.svg';
import portfolio from '../assets/portfolio.png';
import food from '../assets/food.png';
import weather from '../assets/weather.png';
import highfive from '../assets/highfive.png';
import computer from '../assets/computer.jpeg';
import limited from '../assets/limited.png';
import dilango from '../assets/dilango.png';
import kanban from '../assets/kanban.png';
import feel from '../assets/feel.png';
import fiton from '../assets/fiton3.png';
import sri from '../assets/sri.png';

// // Social media images – replace with your own or reuse existing ones
// import youtube_img from '../assets/project_1.svg';   // temporary placeholder
// import tiktok_img from '../assets/project_2.svg';    // temporary placeholder
// import facebook_img from '../assets/project_3.svg';   // temporary placeholder

const mywork_data = [
    // Existing Web Projects (they will appear under "Web Sites" filter)
    {
        w_no: 1,
        w_name: "Clothing Website",
        w_desc: "A modern e-commerce platform for fashion enthusiasts with a sleek UI and seamless checkout.",
        w_img: fiton,
        category: "E-commerce",
        technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
        link: "https://fiton.lk/"  // replace with actual project URL
    },
    {
        w_no: 2,
        w_name: "Traveling Website",
        w_desc: "An interactive travel planning app that helps users discover destinations and book trips.",
        w_img: sri,
        category: "Travel",
        technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
        link: "https://www.srilankawildadventures.com/"
    },
    {
        w_no: 3,
        w_name: "Portfolio Website",
        w_desc: "A personal portfolio to showcase creative work and professional skills.",
        w_img: portfolio,
        category: "Personal",
        technologies: ["React", "Tailwind CSS", "javascript", "Git"],
        link: "https://my-portfolio-eta-rose-73.vercel.app/"
    },
    {
        w_no: 4,
        w_name: "Food Delivery App",
        w_desc: "A food ordering platform with real-time tracking and secure payments.",
        w_img: food,
        category: "Mobile App",
        technologies: ["React", "Tailwind CSS", "nodejs", "express","javascript",, "API Integration", "Git"],
        link: "#"
    },
    {
        w_no: 4,
        w_name: "Computer Shop",
        w_desc: "An online computer shop offering a wide range of hardware, software, and accessories with secure checkout and fast delivery.",
        w_img: computer,
        category: "Web App",
        technologies: ["React", "Tailwind CSS", "nodejs", "express","javascript","mongodb","googleoauth", "API Integration", "Git"],
        link: "#"
    },
    {
        w_no: 5,
        w_name: "KANBAN SYSTEM",
        w_desc: "KANBAN System for tyre company",
        w_img: kanban,
        category: "Web App",
        technologies: ["php", "HTML5", "CSS3", "JavaScript","microsoftsql", "Git"],
        link: "#"
    },
    {
        w_no: 6,
        w_name: "Weather App",
        w_desc: "A minimal weather forecast app using a third‑party API.",
        w_img: weather,
        category: "Utility",
        technologies: ["React","javaScript", "CSS3", "Git"],
        link: "#"
    },

    // Social Media Channels
    {
        w_no: 7,
        w_name: "Dilango YouTube Channel",
        w_desc: "Entertainment",
        w_img: dilango,  // replace with actual image
        category: "Social Media",
        technologies: ["YouTube","premierepro", "lightroom","photoshop","capcut","filmora"],
        link: "https://www.youtube.com/@dilanka9716"
    },
    {
        w_no: 8,
        w_name: "HighFive YouTube Channel",
        w_desc: "Entertainment",
        w_img: highfive,  // replace with actual image
        category: "Social Media",
        technologies: ["YouTube","premierepro", "lightroom","photoshop","capcut","filmora"],
        link: "https://www.youtube.com/@highfive972"
    },
    {
        w_no: 9,
        w_name: "Feel TikTok Channel",
        w_desc: "Short form creative videos",
        w_img: feel,   // replace with actual image
        category: "Social Media",
        technologies: ["TikTok","premierepro", "lightroom","photoshop","capcut","filmora"],
        link: "https://www.tiktok.com/@feel_881"
    },
    {
        w_no: 10,
        w_name: "Limited Facebook Page",
        w_desc: "Music Shorts",
        w_img: limited, // replace with actual image
        category: "Social Media",
        technologies: ["Facebook", "Community Management","premierepro", "lightroom","photoshop","capcut","filmora"],
        link: "https://www.facebook.com/profile.php?id=100070415374073"
    }
];

export default mywork_data;