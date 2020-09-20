// function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
  
    ${data.description}
    
    ## Table of Contents 
      * Installation Instructions
      * Instructions for Use
      * Contribution Guidelines
      * Testing Instructions
      * Questions
      * License
    
    ## Installation Instructions
      
      ${data.installation}
       
    ## Instructions for Use
      
      ${data.usage}
    
    ## Contribution Guidelines 
        
      ${data.contribution}
      
    ## Testing Instructions
        
      ${data.test}
  
    ## Questions 
      * Github Username: ${data.github}
      * Email: ${data.email}
      * ${data.instructions}
   
    ## License
      ${data.license}

  `;
}

module.exports = generateMarkdown;
