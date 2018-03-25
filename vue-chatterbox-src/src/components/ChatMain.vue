<template>
  <div id="chat-main">
    <div id="friends-list">
      <ul>
        <li class="userName" v-for="contact in contacts" v-bind:key="contact.username">
          <img id="images" class="rounded-circle" :src="contact.url"/> 
          {{contact.dpname}}
        </li>
      </ul>
    </div>
    <div id="chat-detail-container">
      <ChatDetail/>
    </div>
  </div>
</template>

<script>
import ChatDetail from './ChatDetail'

export default {
  name: "ChatMain",
  data: function() {
    return {
      contacts: [
        {
          username: "U1",
          dpname: "Name1",
          url: "https://i.ytimg.com/vi/K4zm30yeHHE/maxresdefault.jpg"
        },
        {
          username: "U2",
          dpname: "Name2",
          url: "https://i.ytimg.com/vi/3R2uvJqWeVg/maxresdefault.jpg"
        },
        {
          username: "U3",
          dpname: "Name3",
          url: "https://i.ytimg.com/vi/3R2uvJqWeVg/maxresdefault.jpg"
        },
        {
          username: "U4",
          dpname: "Name4",
          url: "https://i.ytimg.com/vi/K4zm30yeHHE/maxresdefault.jpg"
        },
        {
          username: "U5",
          dpname: "Name5",
          url: "https://i.ytimg.com/vi/3R2uvJqWeVg/maxresdefault.jpg"
        }
      ],
      messages: [
        { text: "phirrrrrr" },
        { text: "busssss" },
        { text: "tussssss" }
      ]
    };
  },
  components: {
    ChatDetail
  }
};
</script>


<style scoped>
  #chat-main {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
  }
  #friends-list {
    background-color: rgb(160, 114, 53);
    padding-top: 10px;
  }

  #chat-detail-container {
    flex-grow: 1;
  }

  #images {
    height: 90px;
    width: 80px;
    padding-right: 5px;
  }

</style>