<template>
    <div class="register-container">
      <div class="register-card">
        <!-- Logo/Brand Section -->
        <div class="brand-section">
          <div class="logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
              <path d="M22 21V19C22 18.1474 21.7366 17.3151 21.2472 16.6042C20.7578 15.8934 20.0649 15.3365 19.25 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11883 19.0078 7.005C19.0078 7.89117 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h1 class="brand-title">Create your account</h1>
          <p class="brand-subtitle">Join us and start your journey today</p>
        </div>
  
        <!-- Register Form -->
        <form @submit.prevent="handleSubmit" class="register-form">
          <!-- Username Field -->
          <div class="form-group">
            <label class="form-label">Username</label>
            <div class="input-wrapper">
              <div class="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <input
                v-model="formData.username"
                type="text"
                class="form-input"
                :class="{ 'is-error': usernameError }"
                placeholder="Choose a username"
                @blur="validateUsername"
                @input="clearUsernameError"
              />
            </div>
            <span v-if="usernameError" class="error-message">{{ usernameError }}</span>
          </div>
  
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
  
          <!-- Phone Number Field -->
          <div class="form-group">
            <label class="form-label">Phone Number</label>
            <div class="input-wrapper">
              <div class="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <input
                v-model="formData.phoneNumber"
                type="tel"
                class="form-input"
                :class="{ 'is-error': phoneNumberError }"
                placeholder="Enter your phone number"
                @blur="validatePhoneNumber"
                @input="clearPhoneNumberError"
              />
            </div>
            <span v-if="phoneNumberError" class="error-message">{{ phoneNumberError }}</span>
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
                placeholder="Create a strong password"
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
            <label class="form-label">Confirm Password</label>
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
                placeholder="Confirm your password"
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
  
          <!-- Date of Birth Field -->
          <div class="form-group">
            <label class="form-label">Date of Birth</label>
            <div class="input-wrapper">
              <div class="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <input
                v-model="formData.dateOfBirth"
                type="date"
                class="form-input"
                :class="{ 'is-error': dateOfBirthError }"
                :max="maxDate"
                @blur="validateDateOfBirth"
                @input="clearDateOfBirthError"
              />
            </div>
            <span v-if="dateOfBirthError" class="error-message">{{ dateOfBirthError }}</span>
          </div>
  
          <!-- Terms and Conditions -->
          <div class="form-group">
            <label class="checkbox-wrapper">
              <input
                type="checkbox"
                v-model="formData.acceptTerms"
                class="checkbox-input"
                @change="validateTerms"
              />
              <span class="checkbox-custom"></span>
              <span class="checkbox-label">
                I agree to the 
                <a href="#" class="terms-link">Terms of Service</a> and 
                <a href="#" class="terms-link">Privacy Policy</a>
              </span>
            </label>
            <span v-if="termsError" class="error-message">{{ termsError }}</span>
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
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                <path d="M22 21V19C22 18.1474 21.7366 17.3151 21.2472 16.6042C20.7578 15.8934 20.0649 15.3365 19.25 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11883 19.0078 7.005C19.0078 7.89117 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Create Account
            </span>
          </button>
  
          <!-- Divider -->
          <div class="divider">
            <span class="divider-text">or</span>
          </div>
  
          <!-- Social Register -->
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
        <div class="register-footer">
          <p class="footer-text">
            Already have an account? 
            <a href="#" @click.prevent="goToLogin" class="footer-link">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterForm',
    data() {
      return {
        formData: {
          username: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
          dateOfBirth: '',
          acceptTerms: false
        },
        showPassword: false,
        showConfirmPassword: false,
        usernameError: '',
        emailError: '',
        phoneNumberError: '',
        passwordError: '',
        confirmPasswordError: '',
        dateOfBirthError: '',
        termsError: '',
        isLoading: false,
        maxDate: new Date().toISOString().split('T')[0]
      }
    },
    computed: {
      isFormValid() {
        return (
          this.formData.username && 
          this.formData.email && 
          this.formData.phoneNumber && 
          this.formData.password && 
          this.formData.confirmPassword && 
          this.formData.dateOfBirth && 
          this.formData.acceptTerms &&
          !this.usernameError && 
          !this.emailError && 
          !this.phoneNumberError && 
          !this.passwordError && 
          !this.confirmPasswordError && 
          !this.dateOfBirthError && 
          !this.termsError &&
          this.formData.password === this.formData.confirmPassword
        )
      }
    },
    methods: {
      validateUsername() {
        if (!this.formData.username) {
          this.usernameError = 'Username is required'
        } else if (this.formData.username.length < 3) {
          this.usernameError = 'Username must be at least 3 characters'
        } else if (this.formData.username.length > 20) {
          this.usernameError = 'Username must be less than 20 characters'
        } else if (!/^[a-zA-Z0-9_]+$/.test(this.formData.username)) {
          this.usernameError = 'Username can only contain letters, numbers, and underscores'
        } else {
          this.usernameError = ''
        }
      },
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
      validatePhoneNumber() {
        // Remove all non-digit characters for validation
        const cleanPhone = this.formData.phoneNumber.replace(/\D/g, '')
        
        if (!this.formData.phoneNumber) {
          this.phoneNumberError = 'Phone number is required'
        } else if (cleanPhone.length < 10) {
          this.phoneNumberError = 'Phone number must be at least 10 digits'
        } else if (cleanPhone.length > 15) {
          this.phoneNumberError = 'Phone number must be less than 15 digits'
        } else if (!/^[+0-9\s\-()]+$/.test(this.formData.phoneNumber)) {
          this.phoneNumberError = 'Please enter a valid phone number'
        } else {
          this.phoneNumberError = ''
        }
      },
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
      validateDateOfBirth() {
        if (!this.formData.dateOfBirth) {
          this.dateOfBirthError = 'Date of birth is required'
        } else {
          const birthDate = new Date(this.formData.dateOfBirth)
          const today = new Date()
          const age = today.getFullYear() - birthDate.getFullYear()
          if (age < 18) {
            this.dateOfBirthError = 'You must be at least 18 years old'
          } else {
            this.dateOfBirthError = ''
          }
        }
      },
      validateTerms() {
        if (!this.formData.acceptTerms) {
          this.termsError = 'You must accept the terms and conditions'
        } else {
          this.termsError = ''
        }
      },
      clearUsernameError() {
        if (this.usernameError) this.usernameError = ''
      },
      clearEmailError() {
        if (this.emailError) this.emailError = ''
      },
      clearPhoneNumberError() {
        if (this.phoneNumberError) this.phoneNumberError = ''
      },
      clearPasswordError() {
        if (this.passwordError) this.passwordError = ''
      },
      clearConfirmPasswordError() {
        if (this.confirmPasswordError) this.confirmPasswordError = ''
      },
      clearDateOfBirthError() {
        if (this.dateOfBirthError) this.dateOfBirthError = ''
      },
      togglePassword() {
        this.showPassword = !this.showPassword
      },
      toggleConfirmPassword() {
        this.showConfirmPassword = !this.showConfirmPassword
      },
      async handleSubmit() {
        this.validateUsername()
        this.validateEmail()
        this.validatePhoneNumber()
        this.validatePassword()
        this.validateConfirmPassword()
        this.validateDateOfBirth()
        this.validateTerms()
        
        if (!this.isFormValid) return
        
        this.isLoading = true
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 2500))
          
          console.log('Register data:', this.formData)
          this.$emit('register-success', this.formData)
          
          // Show success message
          alert('Account created successfully! Please check your email for verification.')
          
        } catch (error) {
          console.error('Registration error:', error)
          alert('Registration failed. Please try again.')
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
  .register-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .register-card {
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
  
  .register-form {
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
  
  .checkbox-wrapper {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    font-size: 14px;
    color: #4a5568;
    line-height: 1.5;
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
    margin-top: 2px;
    position: relative;
    transition: all 0.3s ease;
    flex-shrink: 0;
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
  
  .terms-link {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  
  .terms-link:hover {
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
  
  .register-footer {
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
    .register-card {
      padding: 30px 20px;
      margin: 10px;
    }
    
    .brand-title {
      font-size: 24px;
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