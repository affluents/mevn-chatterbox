<template>
    <div class="h-100">
        <b-card>
            <b-card-header class="p-0">
                <p>Friend Name</p>
            </b-card-header>
            <div id="chat-messages">
                <h1>hi</h1>
            </div>
            <b-card-footer>
               <b-form @submit="onMessageSubmit">
                    <b-form-group id="input-box" >
                        <div class="d-flex flex-row align-items-center">
                            <div id class="p-2">
                                <b-button id="emoticon" class="btn-circle d-flex justify-content-center align-items-center p-0"><i class="material-icons">insert_emoticon</i></b-button>
                            </div>
                            <div id="input-bar">
                                <b-form-input id="new_message"
                                            type="text"
                                            v-model="inputForm.message"
                                            placeholder="Type a message"
                                            autocomplete="off">
                                </b-form-input>
                            </div>
                            <div class="p-2">
                                <b-button id="send-button" type="submit" variant="success" class="btn-circle d-flex justify-content-center align-items-center p-0"><i class="material-icons">send</i></b-button>
                            </div>
                        </div>
                    </b-form-group>
               </b-form>
            </b-card-footer>
        </b-card>
    </div>
</template>

<script>
export default {
  name: "ChatDetail",
  data() {
    return {
      inputForm: {
        message: ""
      }
    };
  },
  methods: {
    onMessageSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(this.inputForm.message));
    }
  }
};
</script>

<style scoped>

#chat-detail-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

#input-bar {
    flex-grow: 1;
}

.form-group {
    margin: 0%;
}

#chat-messages {
  flex-grow: 1;
  overflow: auto;
}

.card {
  height: 100%;
}

.card-header {
  background-color: #FFE9E3;
}

.card-footer {
  background-color: #FFE9E3;
  padding: 0;
  padding-right: 1%;
  padding-left: 1%;
}

.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0;
  background-color: #FFE9E3;
}

.material-icons {
    vertical-align: middle;
    font-size: 1.5em;
}

input {
    border-radius: 0.5em;
}

.btn-circle {
    width: 3em;
    height: 3em;
    border: none;
    text-align: center;
    display: inline-block;
    border-radius: 100%;
}

</style>

