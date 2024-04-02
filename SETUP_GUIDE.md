# Trip Zip Setup

In this document you'll learn how to setup the development environment for contributing to this project.

### Prerequisites

Before you can clone and start contributing you need to install the following on your system:

- Git
- Node
- nvm

<hr>


### 1. Git Clone

In your terminal, run the following command:

```bash
https://github.com/Kanav-Arora/TripZip.git
```

<br/>

Hurray! now you have successfully cloned the TripZip project locally.

```bash
cd tripzip
```
<br/>


### 2. Setup ENV variables

Project requires you to setup some environment variables to access several services. For contributing to certain issues you might not need all variables.

.env.example file contains the variable names and blank values. You can create development keys for the services and replace them with the values.

```bash
cp ./backend/.env.example ./backend/.env
cp ./frontend/.env.example ./frontend/.env
```
<br/>


### 3. Installing Dependencies

.nvmrc file ensures all contrbutors are using same nvm version

```bash
nvm use
npm install
```

```bash
cd frontend 
npm install
```

```bash
cd backend
npm install
```
<br/>

### 4. Setup Database


TripZip uses MongoDB as database. Below is the Schema of the database we use:

- Development
- Test
- Production

You can run the below script from root folder to seed data in development collection.

```bash
cd tripzip
npm run database:setup
```

To reset the data, use below script:

```bash
cd tripzip
npm run database:reset
```

<br/>

### 5. Run the Project

To concurrently run from the root dir, use below command

```bash
  npm run start
```

In the backend folder, use below command to run server

```bash
  npm run dev
```

In the frontend folder, use below command to run server

```bash
  npm run start
```

TripZip server will be running at `http://localhost:8000` and frontend will be running at `http://localhost:3000`