<style>
    :host {
        grid-column: 1 / 3;
        display: grid;
        grid-template-columns: inherit;
    }
</style>

<template>
    <MessageForm :on-send="onSend"></MessageForm>
</template>

<script>
    import { MailService } from '../MailService';
    import MessageForm from '../components/MessageForm';

    export default {
      name: 'MessageComposer',
      components: { MessageForm },
      methods: {
        onSend(message) {
          MailService.sendMessage(message)
            .then(response => {
              const {id} = response;
              const route = this.$route.path.split('/').filter(element => !!element);
              const mailbox = route[0];
              if(mailbox === 'outbox') {
                this.$router.push(`/${mailbox}/view/${id}`);
              } else {
                this.$router.push(`/${mailbox}`);
              }
            })
        }
      }
    }

</script>
