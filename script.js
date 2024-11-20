document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('#main-content');

    window.showLoginForm = function() {
        const formHTML = `
            <div class="form-container">
                <h2>Login</h2>
                <form>
                    <label for="login-username">Username:</label>
                    <input type="text" id="login-username" name="username" required>
                    <label for="login-password">Password:</label>
                    <input type="password" id="login-password" name="password" required>
                    <button type="button">Login</button>
                </form>
                Don't have an account? <a href="#" class="toggle-link" onclick="showSignUpForm()">Register</a>
            </div>
        `;
        mainContent.innerHTML = formHTML;
        document.title = "Log in";
    };

    window.showSignUpForm = function() {
        const formHTML = `
            <div class="form-container">
                <h2>Register</h2>
                <form>
                    <label for="signup-username">Username:</label>
                    <input type="text" id="signup-username" name="username" required>
                    <label for="signup-email">Email:</label>
                    <input type="email" id="signup-email" name="email" required>
                    <label for="signup-password">Password:</label>
                    <input type="password" id="signup-password" name="password" required>
                    <label for="confirm-password">Confirm password:</label>
                    <input type="password" id="confirm-password" name="confirm_password" required>
                    <button type="button">Register</button>
                </form>
                Already have an account? <a href="#" class="toggle-link" onclick="showLoginForm()">Log In</a>
            </div>
        `;
        mainContent.innerHTML = formHTML;
        document.title = "Sign Up";
    };
});
