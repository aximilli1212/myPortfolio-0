import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    impact,
    threejs,
    proxify,
    simpledealer,
    agro,
    qbe,
    ssnit,
    akokomarket,
    pricewise,
    fbsinnova, gwdp, simpleview
    ,
} from "../assets";

export const navLinks = [
    {
        id: "profile",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Designer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "DevOps Engineer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    // {
    //     title: "Senior Software Developer",
    //     company_name: "Proxify (Sweden)",
    //     icon: proxify,
    //     iconBg: "#383E56",
    //     date: "July 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Frontend Team Lead",
        company_name: "Simple Dealer (USA)",
        icon: simpledealer,
        iconBg: "#ffffff",
        date: "Oct 2021 - June 2023",
        points: [
            "Led the migration of a desktop user experience to a single-page app, resulting in a 30% increase in customer engagement",
            "Architected React-based product tours for a new feature, driving a 20% rise in customer adoption and generating over $1M in revenue",
            "Collaborated with design team to develop a Kanban layout, enhancing work efficiency and productivity by improving data visibility.",
            "Contributed across the product development lifecycle for features reaching 150,000+ users",
        ],
    },
    {
        title: "Technical Lead",
        company_name: "Agroinnova Ltd (Ghana)",
        icon: agro,
        iconBg: "#ffffff",
        date: "Jan 2019 - Oct 2021",
        points: [
            "Led the complete overhaul of the user interface (UI) for our internal tool, Akokomarket. The primary goal was to enhance customer accessibility and provide seamless access to our products. This UI transformation had a significant impact, contributing to a remarkable 30% increase in sales revenue",
            "Collaborated closely with the backend engineering team to implement GraphQL APIs. These APIs were instrumental in optimizing the reporting process for our analytical team, resulting in a remarkable 40% increase in reporting speed.",
            "Spearheaded the implementation of a robust unit testing infrastructure using Jest for our applications. This initiative successfully reduced the number of user-reported bugs by an impressive 30% on a monthly basis. The enhanced testing process ensured a smoother and more reliable user experience.",
        ],
    },
    {
        title: "Senior Backend Engineer",
        company_name: "QBE Ghana Ltd (Ghana)",
        icon: qbe,
        iconBg: "#ffffff",
        date: "Jan 2019 - Seasonal",
        points: [
            "Architected microservices backend using Golang and NodeJS",
            "Built REST APIs for web apps, decreasing request latency by 40%",
            "Implemented CI/CD pipelines, automating testing and deployment processes",
            "Optimized MongoDB queries and indexing, reducing latency by 50%",
            "Led migration of monolith to microservices, decoupling frontend and backend",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "SSNIT (Ghana)",
        icon: ssnit,
        iconBg: "#ffffff",
        date: "Sept 2016 - Feb 2018",
        points: [
            "Led the development and design of a robust UI for the SSNIT records system. This user interface facilitated efficient record-keeping of physical documents related to users. The system's intuitive design ensured seamless data management, streamlining operations, and enhancing overall efficiency.",
            "Pioneered the design of biometric forms to collect essential customer biometric data. These forms were instrumental in capturing and storing accurate biometric information securely. By implementing this biometric data collection system, we bolstered data accuracy, compliance, and customer service.",
             "Throughout my role, I demonstrated my ability to translate complex requirements into effective software solutions, empowering different departments within the company to optimize their processes and achieve their goals efficiently. My dedication to crafting user-friendly interfaces and implementing cutting-edge features contributed significantly to the company's success and its commitment to delivering top-notch services to customers."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Nii proved me wrong.",
        name: "Emmanuel Qwaku Botchway",
        designation: "CTO",
        company: "Impact Insurance",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Nii does.",
        name: "Abraham Choi",
        designation: "CEO",
        company: "Simple Dealer, Inc.",
    },
    {
        testimonial:
            "Nii is one was the most dedicated and hardworking members of our team, his input increased productivity by 50%.",
        name: "Moses Mallaghan",
        designation: "CEO",
        company: "Agroinnova Ghana",
    },
];

const projects = [
    {
        name: "GWDP",
        description:
            "An dashboard for the women in poultry group to manage their members.",
        tags: [
            {
                name: "VueJS",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "graphql",
                color: "pink-text-gradient",
            },
            {
                name: "nodeJS",
                color: "pink-text-gradient",
            },
        ],
        image: gwdp,
        view_project_link: "https://gwdpghana.com/",
    },
    {
        name: "Akokomarket",
        description:
            "An ecommerce platform that allows farmers to sell their produce directly to consumers, eliminating the need for middlemen.",
        tags: [
            {
                name: "VueJS",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "graphql",
                color: "pink-text-gradient",
            },
        ],
        image: akokomarket,
        view_project_link: "https://akokomarket.com",
    },
    {
        name: "Simple Dealer",
        description:
            "An integrated platform for dealerships to submit loans to lenders.",
        tags: [
            {
                name: "reactJS",
                color: "green-text-gradient",
            },
            {
                name: "materialUI",
                color: "green-text-gradient",
            },
            {
                name: "nodeJS",
                color: "pink-text-gradient",
            },
            {
                name: "serverless",
                color: "pink-text-gradient",
            },
        ],
        image: simpleview,
        view_project_link: "https://app.simple-dealer.com",
    },
    {
        name: "Fbs Innova",
        description:
            "An innovative solution that empowers smallholder farmers in Agriculture to become entrepreneurs the help technology.",
        tags: [
            {
                name: "reactNative",
                color: "blue-text-gradient",
            },
            {
                name: "graphql",
                color: "green-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "pink-text-gradient",
            },
        ],
        image: fbsinnova,
        view_project_link: "https://play.google.com/store/apps/details?id=com.agroinnova.farmerbusinessschool2",

    },{
        name: "Impact Insurance",
        description:
            "A responsive and interactive website for Impact Life and Insurance company limited.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "nodeJS",
                color: "pink-text-gradient",
            },
        ],
        image: impact,
        view_project_link: "https://impact.gh.com",
    },
    {
        name: "Pricewise",
        description:
            "A hobby project that allows users to scrape and monitor prices on amazon.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: pricewise,
        source_code_link: "https://github.com/aximilli1212/next-scrapper",
    },
    // {
    //     name: "Medingin",
    //     description:
    //         "An extensive hospital management system that caters for all departments in the hospital.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "restapi",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "scss",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: jobit,
    //     source_code_link: "https://github.com/",
    // },

];

export { services, technologies, experiences, testimonials, projects };
