<template>
    <div class="forgot-container">
      <div class="forgot-card">
        <!-- Logo/Brand Section -->
        <div class="brand-section">
          <div class="logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h1 class="brand-title">Reset your password</h1>
          <p class="brand-subtitle">Enter your email to receive reset instructions</p>
        </div>
  
        <!-- Forgot Password Form -->
        <form @submit.prevent="handleSubmit" class="forgot-form">
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
                placeholder="Enter your email address"
                @blur="validateEmail"
                @input="clearEmailError"
              />
            </div>
            <span v-if="emailError" class="error-message">{{ emailError }}</span>
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
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Send Reset Link
            </span>
          </button>
  
          <!-- Info Box -->
          <div class="info-box">
            <div class="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="info-content">
              <h4 class="info-title">What happens next?</h4>
              <p class="info-text">
                We'll send you an email with a link to reset your password. 
                The link will expire in 1 hour for security reasons.
              </p>
            </div>
          </div>
        </form>
  
        <!-- Footer -->
        <div class="forgot-footer">
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
    name: 'ForgotPasswordForm',
    data() {
      return {
        formData: {
          email: ''
        },
        emailError: '',
        isLoading: false
      }
    },
    computed: {
      isFormValid() {
        return this.formData.email && !this.emailError
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
      clearEmailError() {
        if (this.emailError) {
          this.emailError = ''
        }
      },
      async handleSubmit() {
        this.validateEmail()
        
        if (!this.isFormValid) return
        
        this.isLoading = true
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 2000))
          
          console.log('Forgot password data:', this.formData)
          this.$emit('reset-email-sent', this.formData)
          
          // Show success message
          alert('Password reset link has been sent to your email!')
          
        } catch (error) {
          console.error('Reset password error:', error)
          alert('Failed to send reset link. Please try again.')
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
  .forgot-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .forgot-card {
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
  
  .forgot-form {
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
  
  .error-message {
    display: block;
    color: #f56565;
    font-size: 14px;
    margin-top: 6px;
    font-weight: 500;
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
  
  .info-box {
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
  }
  
  .info-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #667eea;
    border-radius: 10px;
    color: white;
    flex-shrink: 0;
  }
  
  .info-content {
    flex: 1;
  }
  
  .info-title {
    font-size: 16px;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 8px 0;
  }
  
  .info-text {
    font-size: 14px;
    color: #4a5568;
    margin: 0;
    line-height: 1.5;
  }
  
  .forgot-footer {
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
    .forgot-card {
      padding: 30px 20px;
      margin: 10px;
    }
    
    .brand-title {
      font-size: 24px;
    }
    
    .info-box {
      padding: 16px;
      gap: 12px;
    }
    
    .info-icon {
      width: 32px;
      height: 32px;
    }
    
    .info-title {
      font-size: 14px;
    }
    
    .info-text {
      font-size: 13px;
    }
  }
  </style> 