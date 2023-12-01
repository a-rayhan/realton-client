### Live Link: [Click Here](https://linktodocumentation)
## Features of Realton Property Selling Website
### 1. User-Based Routes:
- Implement user-specific routes for registration, login, and user profile management using JWT authentication for secure access.
- Utilize Axios in the frontend to handle authentication requests, and set up an interceptor to attach JWT tokens to subsequent API requests for seamless user authentication.
### 2. Agent Functionality:
- Enable agents to add new properties to the platform through dedicated routes.
- Secure these routes using JWT verification to ensure that only authenticated agents can add properties.
- Once a property is added, it remains unverified until the admin reviews and approves it.
### 3. Admin Verification:
- Implement admin-specific routes to review and verify properties added by agents.
- Admins can use the backend to verify or reject properties based on their adherence to the platform's standards.
- A verified property is then displayed on the "All Properties" page for users to browse.
### 4. User Property Interaction:
- Users can view detailed information about a property on its dedicated details page.
- Implement a wishlist feature allowing users to add properties to their wishlist for future reference.
- Ensure that only authenticated users can add properties to their wishlist, with the backend validating JWT tokens for user authentication.
### 5. JWT Token Verification for Admin and Agents:
- Implement JWT token verification for both admin and agent routes to ensure secure access.
- Use backend middleware to check the role encoded in the JWT token and grant or deny access accordingly.
- This ensures that only authenticated and authorized individuals (admin or agent) can perform actions such as property verification or addition.

