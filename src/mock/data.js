import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Charles McQuain | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Charles McQuain Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Charles McQuain',
  subtitle: "I'm a Software Engineer",
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Software Engineer based out of Los Angeles, CA.  I am currently employed as an Application Developer at UCLA. I graduated with a Master of Science degree in Applied Computer Science. I also graduated with a Bacbelor of Science in Information Technology.',
  paragraphTwo:
    'Some of the technologies I am currently working with are: HTML/CSS, JavaScript, Angular, React, .NET Core, C#, and SQL Server.',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Recipe Vault',
    info:
      'Recipe Vault is a website where users can create recipes, share them with friends, or view recipes created by others.',
    info2: 'Angular | .NET Core | C# | Angular Material | SQL Server | Azure | HTML/CSS/JavaScript',
    url: 'https://recipevault20200818160828.azurewebsites.net/',
    repo: 'https://github.com/cjmcquain/RecipeVault', // if no repo, the button will not show up
  } /*
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }, */,
];

// CONTACT DATA
export const contactData = {
  cta: 'Need to get in touch with me?',
  btn: "Let's chat!",
  email: 'charlesmcquain@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/charlesjmcquain/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cjmcquain',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
