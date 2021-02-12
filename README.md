# Unit 10 OOP Homework: Template Engine - Employee Summary

In this project I sought to create readable, reliable, and maintainable code. Oftentimes, *how* we design our code is just as important as the code itself. In this project I built a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Using the Jest node package allows passable testing.


![Screenshot of Inquirer Questions in Console](/Assets/screenshots/console.png)

Video of use:
<iframe src="https://drive.google.com/file/d/1cXwLqkc0tW0-HlYyRfpOANQ8IbKzVcic/preview"</iframe>


## Technologies

Node
Inquirer.js
Jest
Vanilla Javascript
Bootstrap
Font-Awesome
CSS

## User Story

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles


## File Structure

```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```

