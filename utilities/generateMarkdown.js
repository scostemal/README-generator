//  Utilize switch statement to determine which license the user has chosen and return correpsonding badge string.

const renderLicenseBadge = (license) => {
    switch (license) {
      case 'Apache':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'GPL':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      default:
        return '';
    }
  };

//   Utilize switch statement to determine which license the user has chosen and return the corresponding link.
  
  const renderLicenseLink = (license) => {
    switch (license) {
      case 'Apache':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'GPL':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      default:
        return '';
    }
  };
  
// Utilize switch statement to determine which license the user has chosen and return the corresponding license section of the README. If no license, return an empty string

  const renderLicenseSection = (license) => {
    if (!license) {
      return '';
    }
    return `## License
  This project is licensed under the ${license} license. You can find the full license text at [${renderLicenseLink(
      license
    )}](${renderLicenseLink(license)}).`;
  };
  
  const generateMarkdown = (data) => {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Screencastify Demonstration

  Check out this video demonstrating the functionality of the project:

  [Demonstration Video](https://drive.google.com/file/d/1JLWh7kadbP5G6OoqF_MUWjp2qefb3CL9/view)
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any further questions, you can reach the author of this project at https://github.com/${data.githubUsername} or by email at ${data.email}.
  `;
  };
  
  module.exports = generateMarkdown;
  