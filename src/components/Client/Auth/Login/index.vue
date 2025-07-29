<template>
    <div class="login-container">
      <div class="login-card">
        <!-- Logo/Brand Section -->
        <div class="brand-section">
          <div class="logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h1 class="brand-title">Welcome back</h1>
          <p class="brand-subtitle">Sign in to your account to continue</p>
        </div>
  
        <!-- Login Form -->
        <form @submit.prevent="handleSubmit" class="login-form">
          <!-- Email Field -->
          <div class="form-group">
            <label class="form-label">Email address</label>
            <div class="input-wrapper">
              <div class="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <input
                v-model="formData.email"
                type="email"
                class="form-input"
                :class="{ 'is-error': emailError }"
                placeholder="Enter your email"
                @blur="validateEmail"
                @input="clearEmailError"
              />
            </div>
            <span v-if="emailError" class="error-message">{{ emailError }}</span>
          </div>
  
          <!-- Password Field -->
          <div class="form-group">
            <label class="form-label">Password</label>
            <div class="input-wrapper">
              <div class="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="16" r="1" stroke="currentColor" stroke-width="2"/>
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <input
                v-model="formData.password"
                :type="showPassword ? 'text' : 'password'"
                class="form-input"
                :class="{ 'is-error': passwordError }"
                placeholder="Enter your password"
                @blur="validatePassword"
                @input="clearPasswordError"
              />
              <button
                type="button"
                class="password-toggle"
                @click="togglePassword"
              >
                <svg v-if="showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2 12 2 12C2 12 4.5 7.5 8.06 4.06" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4C17 4 22 12 22 12C22 12 21.5 10.5 20.1 8.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.12 14.12A3 3 0 1 1 9.88 9.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
          </div>
  
          <!-- Remember Me & Forgot Password -->
          <div class="form-options">
            <label class="checkbox-wrapper">
              <input
                type="checkbox"
                v-model="formData.rememberMe"
                class="checkbox-input"
              />
              <span class="checkbox-custom"></span>
              <span class="checkbox-label">Remember me</span>
            </label>
            <a href="#" @click.prevent="forgotPassword" class="forgot-link">
              Forgot password?
            </a>
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="submit-button"
            :disabled="!isFormValid || isLoading"
          >
            <span v-if="isLoading" class="loading-spinner"></span>
            <span v-else class="button-text">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="10,17 15,12 10,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="15" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Sign in
            </span>
          </button>
  
          <!-- Divider -->
          <div class="divider">
            <span class="divider-text">or</span>
          </div>
  
          <!-- Social Login -->
          <div class="social-login">
            <button type="button" class="social-button google">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            
            <button type="button" class="social-button github">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Continue with GitHub
            </button>
          </div>
        </form>
  
        <!-- Footer -->
        <div class="login-footer">
          <p class="footer-text">
            Don't have an account? 
            <a href="#" @click.prevent="goToRegister" class="footer-link">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        formData: {
          email: '',
          password: '',
          rememberMe: false
        },
        showPassword: false,
        emailError: '',
        passwordError: '',
        isLoading: false
      }
    },
    computed: {
      isFormValid() {
        return this.formData.email && this.formData.password && !this.emailError && !this.passwordError
      }
    },
    methods: {
      validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!this.formData.email) {
          this.emailError = 'Email is required'
        } else if (!emailRegex.test(this.formData.email)) {
          this.emailError = 'Please enter a valid email address'
        } else {
          this.emailError = ''
        }
      },
      validatePassword() {
        if (!this.formData.password) {
          this.passwordError = 'Password is required'
        } else if (this.formData.password.length < 6) {
          this.passwordError = 'Password must be at least 6 characters'
        } else {
          this.passwordError = ''
        }
      },
      clearEmailError() {
        if (this.emailError) {
          this.emailError = ''
        }
      },
      clearPasswordError() {
        if (this.passwordError) {
          this.passwordError = ''
        }
      },
      togglePassword() {
        this.showPassword = !this.showPassword
      },
      async handleSubmit() {
        this.validateEmail()
        this.validatePassword()
        
        if (!this.isFormValid) return
        
        this.isLoading = true
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 2000))
          
          console.log('Login data:', this.formData)
          this.$emit('login-success', this.formData)
          
          // Show success message
          alert('Login successful!')
          
        } catch (error) {
          console.error('Login error:', error)
          alert('Login failed. Please try again.')
        } finally {
          this.isLoading = false
        }
      },
      forgotPassword() {
        this.$emit('forgot-password')
      },
      goToRegister() {
        this.$emit('go-to-register')
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .login-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 100%;
    max-width: 450px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .brand-section {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    margin-bottom: 20px;
    color: white;
  }
  
  .brand-title {
    font-size: 28px;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 8px 0;
    letter-spacing: -0.025em;
  }
  
  .brand-subtitle {
    font-size: 16px;
    color: #718096;
    margin: 0;
    font-weight: 400;
  }
  
  .login-form {
    margin-bottom: 30px;
  }
  
  .form-group {
    margin-bottom: 24px;
  }
  
  .form-label {
    display: block;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 8px;
    font-size: 14px;
  }
  
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .input-icon {
    position: absolute;
    left: 16px;
    color: #a0aec0;
    z-index: 1;
  }
  
  .form-input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 16px;
    transition: all 0.3s ease;
    background: white;
    color: #2d3748;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  .form-input.is-error {
    border-color: #f56565;
  }
  
  .form-input::placeholder {
    color: #a0aec0;
  }
  
  .password-toggle {
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    color: #a0aec0;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: color 0.3s ease;
  }
  
  .password-toggle:hover {
    color: #4a5568;
  }
  
  .error-message {
    display: block;
    color: #f56565;
    font-size: 14px;
    margin-top: 6px;
    font-weight: 500;
  }
  
  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .checkbox-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #4a5568;
  }
  
  .checkbox-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  .checkbox-custom {
    height: 20px;
    width: 20px;
    background-color: white;
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    margin-right: 12px;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .checkbox-input:checked ~ .checkbox-custom {
    background-color: #667eea;
    border-color: #667eea;
  }
  
  .checkbox-custom:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  
  .checkbox-input:checked ~ .checkbox-custom:after {
    display: block;
  }
  
  .checkbox-label {
    font-weight: 500;
  }
  
  .forgot-link {
    color: #667eea;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  
  .forgot-link:hover {
    color: #5a67d8;
    text-decoration: underline;
  }
  
  .submit-button {
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 16px 24px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 24px;
  }
  
  .submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
  
  .submit-button:disabled {
    background: #cbd5e0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  .button-text {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .divider {
    position: relative;
    text-align: center;
    margin: 24px 0;
  }
  
  .divider::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e2e8f0;
  }
  
  .divider-text {
    background: rgba(255, 255, 255, 0.95);
    padding: 0 16px;
    color: #718096;
    font-size: 14px;
    font-weight: 500;
  }
  
  .social-login {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .social-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 14px 20px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    background: white;
    color: #4a5568;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .social-button:hover {
    border-color: #cbd5e0;
    background: #f7fafc;
    transform: translateY(-1px);
  }
  
  .social-button.google:hover {
    border-color: #4285f4;
    color: #4285f4;
  }
  
  .social-button.github:hover {
    border-color: #333;
    color: #333;
  }
  
  .login-footer {
    text-align: center;
    padding-top: 24px;
    border-top: 1px solid #e2e8f0;
  }
  
  .footer-text {
    margin: 0;
    color: #718096;
    font-size: 14px;
  }
  
  .footer-link {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  
  .footer-link:hover {
    color: #5a67d8;
    text-decoration: underline;
  }
  
  /* Responsive Design */
  @media (max-width: 480px) {
    .login-card {
      padding: 30px 20px;
      margin: 10px;
    }
    
    .brand-title {
      font-size: 24px;
    }
    
    .form-options {
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }
    
    .social-login {
      gap: 10px;
    }
    
    .social-button {
      padding: 12px 16px;
      font-size: 13px;
    }
  }
  </style> 