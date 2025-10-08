import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png?v=20251003',
        link: 'https://github.com/ifrahsayyada/404-error',
    },
    {
        title: 'News Magazine',
        description: 'Mobile App',
        bgImage: '/work-2.png',
        link: 'https://github.com/ifrahsayyada/NewsMAg.git',
    },
    {
        title: 'Portfolio site',
        description: 'Web Design',
        bgImage: '/work-3.png',
        link: 'https://ifrahsayyada.vercel.app',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
        link: 'https://www.figma.com/design/PEl4XCYGru8L8ykJK0HNla/Untitled?node-id=0-1&t=ym7BdOC54Qpf5VSq-1',
    },
]

export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Web design', 
        description: 'Web development is the process of building, programming...', 
        link: '/services/web-design',
        slug: 'web-design',
        fullDescription: 'Web development is the process of building, programming, and maintaining websites and web applications. It combines creativity with technical expertise to create stunning, functional, and user-friendly digital experiences.',
        features: [
            'Responsive Design - Websites that work perfectly on all devices',
            'Modern UI/UX - Clean and intuitive user interfaces',
            'Performance Optimization - Fast loading and smooth interactions',
            'SEO Friendly - Built with search engine optimization in mind',
            'Cross-browser Compatibility - Works seamlessly across all browsers'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Mobile app', 
        description: 'Mobile app development involves creating software for mobile devices...', 
        link: '/services/mobile-app',
        slug: 'mobile-app',
        fullDescription: 'Mobile app development involves creating software applications specifically designed for mobile devices such as smartphones and tablets. I build high-quality, scalable mobile applications that provide excellent user experiences.',
        features: [
            'Cross-platform Development - Build once, deploy everywhere',
            'Native Performance - Smooth and responsive user experience',
            'Offline Functionality - Apps that work without internet',
            'Push Notifications - Keep users engaged',
            'Secure Authentication - Protect user data and privacy'
        ],
        technologies: ['React Native', 'Flutter', 'Firebase', 'REST APIs', 'Redux']
    },
    { 
        icon: assets.ui_icon, 
        title: 'UI/UX design', 
        description: 'UI/UX design focuses on creating a seamless user experience...', 
        link: '/services/ui-ux-design',
        slug: 'ui-ux-design',
        fullDescription: 'UI/UX design focuses on creating a seamless and intuitive user experience through thoughtful interface design. I combine aesthetics with functionality to create designs that users love and that drive business results.',
        features: [
            'User Research - Understanding your target audience',
            'Wireframing & Prototyping - Visualize before development',
            'Interactive Design - Engaging and intuitive interfaces',
            'Usability Testing - Ensuring optimal user experience',
            'Design Systems - Consistent and scalable design patterns'
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Photoshop']
    },
    { 
        icon: assets.graphics_icon, 
        title: 'Graphics design', 
        description: 'Creative design solutions to enhance visual communication...', 
        link: '/services/graphics-design',
        slug: 'graphics-design',
        fullDescription: 'Graphics design is the art of visual communication through creative design solutions. I create compelling visual content that captures attention, communicates messages effectively, and strengthens brand identity.',
        features: [
            'Brand Identity - Logos, color schemes, and brand guidelines',
            'Marketing Materials - Brochures, flyers, and promotional content',
            'Social Media Graphics - Eye-catching posts and banners',
            'Illustrations - Custom artwork and icons',
            'Print & Digital Design - Versatile designs for all mediums'
        ],
        technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Canva', 'CorelDRAW']
    },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, Python.' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science ' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.mongodb, assets.figma, assets.git
]; 