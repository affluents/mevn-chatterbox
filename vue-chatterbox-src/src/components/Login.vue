<template>
    <b-container>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <b-card>
                <b-tabs id="tabs">
                    <b-tab title="Login" active>
                        <div>
                            <b-form @submit="onLoginSubmit">
                                <div id="textalign">
                                    <b-form-group id="emailGroup"
                                            label="Email address:"
                                            label-for="email"
                                            class="unselectable">
                                <b-form-input id="email"
                                            type="email"
                                            v-model="loginForm.email"
                                            required
                                            placeholder="Enter email">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group id="passwordGroup"
                                            label="Your Password:"
                                            label-for="password"
                                            class="unselectable">
                                <b-form-input id="password"
                                            type="password"
                                            v-model="loginForm.password"
                                            required
                                            placeholder="Enter password">
                                </b-form-input>
                            </b-form-group>
                                </div>
                            <b-button type="submit" variant="primary" href="/ChatMain" class="btn">Login</b-button>
                            </b-form>
                        </div>
                    </b-tab>
                    <b-tab title="Sign Up" >
                    <div>
                            <b-form @submit="onSignUpSubmit">
                                <div id="textalign">
                                    <b-form-group id="newEmailGroup"
                                            label="Email address:"
                                            label-for="new_email"
                                            description="We'll never share your email with anyone else."
                                            class="unselectable">
                                <b-form-input id="new_email"
                                            type="email"
                                            v-model="signUpForm.email"
                                            required
                                            placeholder="Email address">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group id="nameGroup"
                                            label="Your Name:"
                                            label-for="name"
                                            class="unselectable">
                                <b-form-input id="name"
                                            type="text"
                                            v-model="signUpForm.name"
                                            required
                                            placeholder="Enter name">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group id="new_password"
                                            label="Create Password:"
                                            label-for="new_password"
                                            class="unselectable">
                                <b-form-input id="new_password"
                                            type="password"
                                            v-model="signUpForm.password"
                                            required
                                            placeholder="New password">
                                </b-form-input>
                            </b-form-group>
                                </div>
                            <b-button type="submit" variant="success" class="btn">Sign Up</b-button>
                            </b-form>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>
            </div>
        </div>
    </b-container>
</template>

<script>

export default {
  name: 'Login',
  data() {
      return {
          loginForm: {
              email: '',
              password:''
          },
          signUpForm: {
              name: '',
              email: '',
              password:''
          }
      }
  },
  methods: {
      onLoginSubmit: function() {
          alert(JSON.stringify(this.loginForm))
      },
      onSignUpSubmit() {
          alert(JSON.stringify(this.signUpForm))
      }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito:600');

.card-body {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);
    -webkit-transition: box-shadow 1s;
    transition: box-shadow 1s;
}

.card-body:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#textalign {
    text-align: start;
    padding-top: 10px
}

input {
    border-radius: 1rem;
}

.btn {
    border-radius: 2rem;
    align-self: auto;
}

div.container {
    padding-top: 3em;
    font-family: 'Nunito';
    font-size: 1.5em;
}
</style>
