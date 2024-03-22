// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'ptpam', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ptpam/circleci-github-actions', 'ptpam/leetcode', 'ptpam/CppND-Capstone-Snake-Game', 'ptpam/kubernetes-flask-mysql'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Smart Cabin Monitoring System',
          id: 1,
          description:
            'An innovative project focused on deploying a monitoring system for vehicles using edge devices',
          details: ' "Smart Cabin Monitoring System" is a sophisticated project aimed at deploying a comprehensive monitoring system for cabins using edge devices. The project encompasses various stages, starting from model development to deployment, with a focus on optimization and integration.\
          <br>\
          <br>\
          <strong>Model Development:</strong> The project involved initial model development, including problem description, data collection, and ensuring the success of the models across various test cases. This phase required meticulous attention to detail to achieve high accuracy levels.\
          <br>\
          <strong>Integration of Several Models:</strong> Multiple models were integrated into the system, necessitating optimization due to limited resources. The integration process focused on ensuring the performance of the models in terms of accuracy while utilizing multithreading for enhanced efficiency.\
          <br>\
          <strong>Edge-Device Deployment:</strong> Special emphasis was placed on deploying the monitoring system on edge devices. This involved model conversion, integration, and implementation of multithreading to enhance performance in resource-constrained environments.\
          <br>\
          <strong>Collaboration and Integration:</strong> Close collaboration with cross-functional teams was crucial for integrating system logic seamlessly. This ensured an efficient end-to-end solution, meeting the project\'s objectives effectively.\
          <br>\
          <strong>Docker-Based Automation:</strong> Docker-based automation was implemented to streamline the integration of in-cabin monitoring system components. This optimized development workflows and ensured consistent deployment across different environments, enhancing scalability and reliability.',
          imageUrl:
            'scms.webp',
          link: '',
        },
        {
          title: 'Cloud Image Classifier',
          id: 2,
          details: '<strong>Cloud Image Classifier:</strong> Cloud Image Classifier is a comprehensive project that integrates various technologies to provide an intuitive image classification service. The system is built using Docker for containerization, Flask for web framework, and AWS for deployment.<br>\
          The primary functionality of the project involves users uploading images through a web interface. Once an image is uploaded, it is sent to the backend, where the classification model processes it.<br>\
          The classification model could be based on deep learning, machine learning, or any other suitable technique depending on the project requirements.<br>\
          The Docker containerization ensures portability and consistency across different environments. Flask, a lightweight and efficient web framework, handles the communication between the user interface and the backend processing. AWS is utilized for deployment, offering scalability, reliability, and ease of management.<br>\
          AWS services like EC2 for hosting the application, S3 for storing uploaded images, and possibly SageMaker for running machine learning models can be integrated into the project. Upon processing, the classification results are sent back to the user\'s web browser, where they can view the outcome of the image classification task. The web interface is designed to be user-friendly and straightforward, making it accessible to users with varying levels of technical expertise.<br>\
          Overall, "Cloud Image Classifier" showcases proficiency in containerization, web development, cloud computing, and machine learning, making it an impressive addition to any portfolio demonstrating a diverse skill set and practical application of modern technologies.<br>',
          description:
            'A Dockerized Flask application deployed on AWS, offering image classification',
          imageUrl:
            'cloud.webp',
          link: '',
        },
        {
          title: 'CircleCI-Docker Tutorial Repository',
          id: 3,
          details: '<p>\
          This repository serves as a beginner-friendly guide for learning Continuous Integration/Continuous Deployment (CI/CD) using CircleCI and Docker. It provides a hands-on approach to understanding CI/CD principles and containerization concepts through a simple Flask web application.\
          Whether you\'re new to CI/CD or looking to deepen your understanding, this repository offers a step-by-step tutorial on setting up CI/CD pipelines, integrating Docker containers, and deploying applications with CircleCI.\
          </p>\
          <p>\
          By following the instructions and exploring the provided resources, you can gain practical experience and confidence in utilizing CI/CD workflows for your projects. Contributions are welcome, as this repository aims to be a collaborative learning resource for the community.\
          </p>\
          <div style="text-align: center;">\
          <a href="https://github.com/ptpam/circleci-github-actions" target="_blank" style="background-color: #008CBA; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; border-radius: 5px; border: none; transition: background-color 0.3s ease;">Visit Repository</a>\
          </div>',
          description:
            'A beginner-friendly guide for learning Continuous Integration/Continuous Deployment (CI/CD) using CircleCI and Docker',
          imageUrl:
            'circleci.webp',
          link: '',
        },
        {
          title: 'CPPND: Capstone Snake Game Example',
          id: 4,
          details: '<p>\
          Welcome to the Capstone Snake Game Example repository! This project showcases the culmination of my journey through the Udacity C++ Nanodegree Program. Here, you\'ll find an enhanced version of the classic Snake game, infused with modern C++ features and best practices.\
      </p>\
      <p>\
          The aim of this project is to demonstrate my proficiency in C++ programming and software development principles. By meticulously crafting clean and efficient code, I\'ve transformed the traditional Snake game into a polished application, ready to be added to my portfolio and shared with potential employers and colleagues.\
      </p>\
      <p>\
          Through this repository, I invite you to explore the enhancements made to the game, from improved loops and functions to advanced object-oriented design and memory management techniques. Dive into the code, run the game, and witness firsthand the evolution of a simple game into a sophisticated application that highlights my skills and dedication to the craft of software development.\
      </p>\
      <div style="text-align: center;">\
          <a href="https://github.com/ptpam/CppND-Capstone-Snake-Game" target="_blank" style="background-color: #008CBA; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; border-radius: 5px; border: none; transition: background-color 0.3s ease;">Visit Repository</a>\
      </div>',
          description:
            'A foundation for building and extending a Snake game using C++',
          imageUrl:
            'cpp.webp',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Melike',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ermismel',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'ermismelike@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1Q0nLxTOQv1W-CeXcOd2-zerpL8TCdqdv/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Go',
    'C++',
    'Jupyter',
    'Matplotlib', 
    'Numpy',
    'Scikit-learn',
    'Gym',
    'TensorFlow',
    'PyTorch',
    'Docker',
    'AWS',
    'Computer vision',
    'Software development',
    'Multithreading',
    'Object-oriented programming',
    'Containerization',
    'CircleCI',
    'CI/CD'
  ],
  experiences: [
    {
      company: 'DeltaX',
      position: 'AI Researcher',
      from: 'September 2022',
      to: 'March 2024',
      companyLink: 'http://deltax.ai/',
    },
    {
      company: 'WAVE Lifestyle Tech',
      position: 'Computer Vision Engineer',
      from: 'April 2021',
      to: 'July 2022',
      companyLink: 'https://www.wavehq.com/',
    },
    {
      company: 'Seoul National University',
      position: 'Graduate Student',
      from: 'February 2019',
      to: 'February 2021',
      companyLink: 'http://coregroup.snu.ac.kr/',
    },
  ],
  certifications: [
    {
      name: 'Introduction to Machine Learning with PyTorch',
      body: 'Udacity',
      year: '',
      link: 'https://confirm.udacity.com/FU4QEGRS',
    },
    {
      name: 'C++',
      body: 'Udacity',
      year: '',
      link: 'https://confirm.udacity.com/e/72dcc0e0-524a-11ee-ab36-9fd0fc04ec9f',
    },
    {
      name: 'AI Programming with Python',
      body: 'Udacity',
      year: '',
      link: 'https://confirm.udacity.com/GYGDJ3PM',
    },
    {
      name: 'Small Datasets in Machine Learning',
      body: 'Udacity',
      year: '',
      link: 'https://confirm.udacity.com/e/b4b00b48-bed5-11ed-ac01-9f947bcffe14',
    },
    {
      name: '한국어능력시험(TOPIK)',
      body: '5 급',
      year: '',
      link: '',
    },
    {
      name: 'TOEFL(IBT)',
      body: '91',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Seoul National University, Seoul KR',
      degree: 'MS in Electrical and Computer Engineering',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Bogazici University, Istanbul TR',
      degree: 'BS in Computer Engineering',
      from: '2014',
      to: '2018',
    },
  ],
  publications: [
    {
      title: 'A3DQN: Adaptive Anderson Acceleration for Deep Q-Networks',
      conferenceName: 'IEEE Symposium Series on Computational Intelligence (SSCI)',
      journalName: '',
      authors: 'Melike Ermis, Insoon Yang',
      link: 'https://ieeexplore.ieee.org/abstract/document/9308288',
      description:
        'Reinforcement learning (RL) has been used for an agent to learn efficient decision-making strategies through its interactions with an environment. However, slow convergence and sample inefficiency of RL algorithms make them impractical for complex real-world problems. In this paper, we present an acceleration scheme, called Anderson acceleration (AA), for RL, where the value function in the next iteration is calculated using a linear combination of value functions in the previous iterations. Since the original AA method suffers from instability, we consider adaptive Anderson acceleration (A3) as a stabilized variant of AA, which contains both adaptive regularization to handle instability and safeguarding to enhance performance. We first apply A3 to value iteration for Q-functions and show its convergence property. To extend the idea of A3 to model-free deep RL, we devise a simple variant of deep Q-networks (DQN). Our experiments on the Atari 2600 benchmark demonstrate that the proposed method outperforms double DQN in terms of both final performance and learning speed.',
    },
    {
      title: 'On Anderson Acceleration for Partially Observable Markov Decision Processes',
      conferenceName: '2021 60th IEEE Conference on Decision and Control (CDC)',
      journalName: '',
      authors: 'Melike Ermis, Mingyu Park, Insoon Yang',
      link: 'https://ieeexplore.ieee.org/abstract/document/9683383',
      description:
        'This paper proposes an accelerated method for approximately solving partially observable Markov decision process (POMDP) problems offline. Our method carefully combines two existing tools: Anderson acceleration (AA) and the fast informed bound (FIB) method. Adopting AA, our method rapidly solves an approximate Bellman equation with an efficient combination of previous solution estimates. Furthermore, the use of FIB alleviates the scalability issue inherent in POMDPs. We show the convergence of the overall algorithm to the suboptimal solution obtained by FIB. We further consider a simulation-based method and prove that the approximation error is bounded explicitly. The performance of our algorithm is evaluated on several benchmark problems. The results of our experiments demonstrate that the proposed algorithm converges significantly faster without degrading the quality of the solution compared to its standard counterpart.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/ptpam/portfolio"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
