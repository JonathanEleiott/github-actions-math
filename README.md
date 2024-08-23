# Testing and Continuous Integration

## Manual Testing

- More prone to human error
- Carried out by the QA role
- More costly in the long-term
- Time consuming
- Older way

## Automated Testing

- Testing through automated code/scripts
- More up-front cost and time
- Goal is efficiency
- Some manual work to write the tests

## TDD (Test Driven Development)

- write a test
- it should fail
- write code that passes the test
- refactor and clean up the code
- run all tests
- repeat

## Types of tests

- Unit -> tests the functionality of an individual unit of code
  - individual function
  - getUser()
- Integration -> tests that combine multiple units
  - moving mail from the Inbox to Spam folder
- Functional -> testing user scenarios on the browser itself by controlling the browser programmatically
  - end to end testing
  - logging in all the way through sending emails and then logging out
- Acceptance -> testing that the application meets specific requirements
  - Alpha and Beta releases of applications or software

Happy Path -> the function acts as you would expect when given the correct parameters

Unhappy Path -> what the function return if the parameters are incorrect

## Notes

- test for behavior, not implementation

## Jest

- npm i jest
- change test script to jest
- create a file with a name that ends in .test.js (math.test.js)
- write a bunch of tests (takes in a description and a function)
  - test('description for the test', () => { expect(1 + 2).toBe(3) })
- run the test

## Mocking and Stubbing - simplify tests when writing them

- mimic some parts of your code for a test so that you do not need to set up the actual code in your test (stunt double)


## Continuous Integration && Continuous Delivery (CI/CD)

Continuous Integration (CI)

- Automating
  - Building the Code
  - Testing the Code
- How does it work?
  - developer makes a change
  - CI system will automatically build the code
  - CI runs the automated tests
  - CI reports back the results

## Continuous Delivery (CD)

- Deploying code updates to production

## GutHub Actions

- Workflow -> executes multiple jobs
- Job -> set of steps to run
- Event -> specific action within a repo (commit, pull request, etc.)
- Actions -> frequently repeated set of tasks are packaged into actions
- Runner -> machine that runs workflows
- Configuration -> defined by YAML files in .github/workflows
