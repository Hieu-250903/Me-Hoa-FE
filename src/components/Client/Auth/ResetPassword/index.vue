<template>
    <div class="reset-container">
      <div class="reset-card">
        <!-- Logo/Brand Section -->
        <div class="brand-section">
          <div class="logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h1 class="brand-title">Set new password</h1>
          <p class="brand-subtitle">Enter your new password below</p>
        </div>
  
        <!-- Reset Password Form -->
        <form @submit.prevent="handleSubmit" class="reset-form">
          <!-- New Password Field -->
          <div class="form-group">
            <label class="form-label">New Password</label>
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
                placeholder="Enter your new password"
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
  
          <!-- Confirm Password Field -->
          <div class="form-group">
            <label class="form-label">Confirm New Password</label>
            <div class="input-wrapper">
              <div class="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="16" r="1" stroke="currentColor" stroke-width="2"/>
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <input
                v-model="formData.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                class="form-input"
                :class="{ 'is-error': confirmPasswordError }"
                placeholder="Confirm your new password"
                @blur="validateConfirmPassword"
                @input="clearConfirmPasswordError"
              />
              <button
                type="button"
                class="password-toggle"
                @click="toggleConfirmPassword"
              >
                <svg v-if="showConfirmPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <span v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</span>
          </div>
  
          <!-- Password Requirements -->
          <div class="requirements-box">
            <h4 class="requirements-title">Password Requirements</h4>
            <ul class="requirements-list">
              <li :class="{ 'met': formData.password.length >= 8 }">
                <svg v-if="formData.password.length >= 8" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                At least 8 characters
              </li>
              <li :class="{ 'met': /[a-z]/.test(formData.password) }">
                <svg v-if="/[a-z]/.test(formData.password)" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                One lowercase letter
              </li>
              <li :class="{ 'met': /[A-Z]/.test(formData.password) }">
                <svg v-if="/[A-Z]/.test(formData.password)" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                One uppercase letter
              </li>
              <li :class="{ 'met': /\d/.test(formData.password) }">
                <svg v-if="/\d/.test(formData.password)" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                One number
              </li>
            </ul>
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
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
              </svg>
              Update Password
            </span>
          </button>
        </form>
  
        <!-- Footer -->
        <div class="reset-footer">
          <p class="footer-text">
            Remember your password? 
            <a href="#" @click.prevent="goToLogin" class="footer-link">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResetPasswordForm',
    props: {
      token: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        formData: {
          password: '',
          confirmPassword: ''
        },
        showPassword: false,
        showConfirmPassword: false,
        passwordError: '',
        confirmPasswordError: '',
        isLoading: false
      }
    },
    computed: {
      isFormValid() {
        return (
          this.formData.password && 
          this.formData.confirmPassword && 
          !this.passwordError && 
          !this.confirmPasswordError &&
          this.formData.password === this.formData.confirmPassword &&
          this.formData.password.length >= 8 &&
          /[a-z]/.test(this.formData.password) &&
          /[A-Z]/.test(this.formData.password) &&
          /\d/.test(this.formData.password)
        )
      }
    },
    methods: {
      validatePassword() {
        if (!this.formData.password) {
          this.passwordError = 'Password is required'
        } else if (this.formData.password.length < 8) {
          this.passwordError = 'Password must be at least 8 characters'
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(this.formData.password)) {
          this.passwordError = 'Password must contain uppercase, lowercase, and number'
        } else {
          this.passwordError = ''
        }
        this.validateConfirmPassword()
      },
      validateConfirmPassword() {
        if (!this.formData.confirmPassword) {
          this.confirmPasswordError = 'Please confirm your password'
        } else if (this.formData.password !== this.formData.confirmPassword) {
          this.confirmPasswordError = 'Passwords do not match'
        } else {
          this.confirmPasswordError = ''
        }
      },
      clearPasswordError() {
        if (this.passwordError) this.passwordError = ''
      },
      clearConfirmPasswordError() {
        if (this.confirmPasswordError) this.confirmPasswordError = ''
      },
      togglePassword() {
        this.showPassword = !this.showPassword
      },
      toggleConfirmPassword() {
        this.showConfirmPassword = !this.showConfirmPassword
      },
      async handleSubmit() {
        this.validatePassword()
        this.validateConfirmPassword()
        
        if (!this.isFormValid) return
        
        this.isLoading = true
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 2000))
          
          console.log('Reset password data:', {
            token: this.token,
            password: this.formData.password
          })
          this.$emit('password-reset-success', this.formData)
          
          // Show success message
          alert('Password updated successfully! You can now sign in with your new password.')
          
        } catch (error) {
          console.error('Reset password error:', error)
          alert('Failed to update password. Please try again.')
        } finally {
          this.isLoading = false
        }
      },
      goToLogin() {
        this.$emit('go-to-login')
      }
    }
  }
  </script>
  
  <style scoped>
  .reset-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .reset-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 100%;
    max-width: 500px;
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
  
  .reset-form {
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
  
  .requirements-box {
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 24px;
  }
  
  .requirements-title {
    font-size: 16px;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 16px 0;
  }
  
  .requirements-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 8px;
  }
  
  .requirements-list li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #718096;
    transition: color 0.3s ease;
  }
  
  .requirements-list li.met {
    color: #48bb78;
  }
  
  .requirements-list li svg {
    flex-shrink: 0;
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
  
  .reset-footer {
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
    .reset-card {
      padding: 30px 20px;
      margin: 10px;
    }
    
    .brand-title {
      font-size: 24px;
    }
    
    .requirements-box {
      padding: 16px;
    }
    
    .requirements-title {
      font-size: 14px;
    }
    
    .requirements-list li {
      font-size: 13px;
    }
  }
  </style> 