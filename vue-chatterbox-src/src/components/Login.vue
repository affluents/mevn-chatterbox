<template>
    <b-container>
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
                    <b-button type="submit" variant="primary">Login</b-button>
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
                    <b-button type="submit" variant="success">Sign Up</b-button>
                    </b-form>
                </div>
            </b-tab>
        </b-tabs>
        </b-card>
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
    box-sizing: 100px 200px;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-transition: box-shadow 1s;
    transition: box-shadow 1s;
}
.card-body:hover {
    box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#tabs {
    -webkit-transition: height 100s;
    transition:  height 100s;
}

#textalign {
    text-align: start;
    padding-top: 10px
}

input {
    border-radius: 1rem;
}

button {
    border-radius: 2rem;
    align-self: auto;
}
div.container {
    padding: 20px;
    font-family: 'Nunito';
    font-size: 20px;
    width: 500px;
    -webkit-transition: height 2s;
    transition: height 2s;

}
</style>
