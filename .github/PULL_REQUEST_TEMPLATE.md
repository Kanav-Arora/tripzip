# Description
Please include a summary of the change or the issue that is being fixed. Please also include relevant context for the reviewer to get an idea of the PR. List any dependencies that are required for this change.

# How has this been tested?
Be very exhaustive in listing these Test Scenarios. Please ensure that the scenarios listed here do not break.

- [ ] Test A
- [ ] Test B

# DB Migrations (Is the table being locked?)
Include the migration run time on staging and if the tables involved are being locked

# Affected Endpoint performances (Include the average endpoint load time)
Include the performance changes like Average response time, query run times on affected endpoints

# Post Deploy Tasks
Any script or data updates that need to be done post deployment

# Screenshots:
[If you made some visual changes to the application please upload screenshots here, or remove this section]

# Task Link

# Self Review Checklist
- [ ] Deprecated code removed?
- [ ] Syntax & Formatting is correct
- [ ] Is the approach to the problem appropriate?
- [ ] Can anything be simplified?
- [ ] Are the naming conventions appropriate?
- [ ] Are there enough comments inline with the code?
- [ ] Documentation added?
- [ ] Arguments of method less than 6 ?
- [ ] Single responsibility functions
- [ ] Are the methods which can be reused added in common folders?

### Backend
- [ ] Are the methods lightweight (less than 20 lines)
- [ ] 2 step deploy needed(Migration, Jobs)
- [ ] Check if backward compatibility is needed
- [ ] Indexes are properly used for the queries?
- [ ] Caching implemented for frequent access data?
- [ ] For New table migrations, indices are added properly and reviewed by leads

### Frontend
- [ ] Colors and font-sizes according to theme file
- [ ] BEM used properly? Mixins used properly?
- [ ] Are the components lightweight(less than 200 lines)
- [ ] Tested responsive design on different devices
