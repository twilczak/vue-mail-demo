<style>
    .mailbox {
        display: grid;
        grid-template-columns: 160px auto;
        padding: 10px;
    }

    .mailbox-border {
        width: 100%;
        border: 0 solid black;
        border-bottom-width: 1px;
        grid-column: 1/3;
    }
</style>

<template>
    <section class="mailbox">
        <MailboxControls></MailboxControls>
        <MessageList :messages="messages"></MessageList>
        <hr class="mailbox-border"/>
        <router-view></router-view>
    </section>
</template>

<script>
    import { MailService } from '../MailService';
    import MailboxControls from '../components/MailboxControls';
    import MessageList from '../components/MessageList';

    export default {
      components: { MailboxControls, MessageList },
      data (){
        return {
          messages: []
        };
      },

      beforeRouteEnter (to, from, next) {
        const route = to.path.split('/').filter(element => !!element);
        const mailbox = route[0];

        MailService.getMessages(mailbox)
          .then(messages => next(vm => vm.messages = messages));
      }
    }
</script>
