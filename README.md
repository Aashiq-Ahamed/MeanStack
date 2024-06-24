**Getting Started**
**Prerequisites**
Node.js
npm
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd MEANSTACK
Install backend dependencies:

bash
Copy code
cd backend
npm install
Install frontend dependencies:

bash
Copy code
cd ../frontend
npm install
Running the Application
Start MongoDB:
Make sure MongoDB is running on your local machine.

**Start the backend server:**

bash
Copy code
cd backend
node app.js
The backend server will start on port 3000.

**Start the frontend server:**

bash
Copy code
cd ../frontend
ng serve
The frontend server will start on port 4200.

**API Endpoints**
GET /lists
Description: Retrieves all lists.
Models
List Model

Fields: Define your List schema in backend/database/models/list.js.
Task Model

Fields: Define your Task schema in backend/database/models/task.js.

Open a pull request.

Acknowledgments
Inspiration and resources from the MEAN stack community.
