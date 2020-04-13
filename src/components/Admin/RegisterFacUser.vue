<template>
    <div class="main">
        <admin-panel-header/>
        <div class="app-dashboard shrink-medium">
            <div class="app-dashboard-body off-canvas-wrapper">
                <div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Register New Faculty User</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                        </div>
                    </div>
                </div>
            </div>
            <div class="form">
            <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-50 md-small-size-100 area">
                <md-card-header>
                <div class="md-title">Users</div>
                </md-card-header>

                <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('firstName')">
                        <label for="first-name">First Name</label>
                        <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                        <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                    </md-field>
                    </div>

                    <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('lastName')">
                        <label for="last-name">Last Name</label>
                        <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                        <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                    </md-field>
                    </div>
                </div>

                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('gender')">
                        <label for="gender">Gender</label>
                        <md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="sending">
                        <md-option></md-option>
                        <md-option  class="select" value="M">M</md-option>
                        <md-option  class="select" value="F">F</md-option>
                        </md-select>
                        <span class="md-error">The gender is required</span>
                    </md-field>
                    </div>
                </div>

                <md-field :class="getValidationClass('email')">
                    <label for="email">NSBM Email</label>
                    <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                    <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                </md-field>
                <md-field :class="getValidationClass('position')">
                        <label for="position">Position</label>
                        <md-input name="position" id="position" autocomplete="given-position" v-model="form.position" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.position.required">The position name is required</span>
                        <span class="md-error" v-else-if="!$v.form.position.minlength">Invalid position name</span>
                    </md-field>
                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending" />

                <md-card-actions>
                <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
                </md-card-actions>
            </md-card>

            <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
            </form>
            </div>
        </div>
    </div>   
</template>

<script>
import AdminPanelHeader from './AdminPanelHeader';
import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

export default {
    name: "RegisterFacUser",
    components: {
            AdminPanelHeader,
        },
        mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
        position:null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        age: {
          required,
          maxLength: maxLength(3)
        },
        gender: {
          required
        },
        email: {
          required,
          email
        },
        position: {
          required,
          minLength: minLength(3)
        },
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
        this.form.postion = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
}
</script>

<style scoped>

    .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .form{
      margin-left: 4in;
  }

  .md-primary{
      background-color: #19589d;
      color: white;
  }

  .area{
      background-color: #e7e7e7;
  }

  .select{
      background-color: rgba(231,231,231,1);
  }

</style>