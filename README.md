## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Create a `.env` file in the root directory with the following content:

5. Start the MongoDB service.
6. Run `node src/server.js` to start the server.

## API Endpoints

### User Endpoints
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `POST /api/users/upload` - Upload an assignment (requires token)
- `GET /api/users/admins` - Get all admins

### Admin Endpoints
- `POST /api/admins/register` - Register a new admin
- `POST /api/admins/login` - Admin login
- `GET /api/admins/assignments` - Get assignments (requires token)
- `POST /api/admins/assignments/:id/accept` - Accept an assignment (requires token)
- `POST /api/admins/assignments/:id/reject` - Reject an assignment (requires token)

## Notes
- Make sure to test the API using tools like Postman.
- Consider adding more validation and error handling as needed.
