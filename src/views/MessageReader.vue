<style>
    .message-reader {
        grid-column: 1 / 3;
        display: grid;
        grid-template-columns: inherit;
    }
</style>

<template>
    <div class="message-reader">
        <MessageDetail :message="message" :on-delete="onDelete"></MessageDetail>
    </div>
</template>

<script>
    import { MailService } from '../MailService';
    import MessageDetail from '../components/MessageDetail';

    function getRoutePrams(to) {
      const route = to.path.split('/').filter(element => !!element);
      const mailbox = route[0];
      const id = route[2];

      return {mailbox, id};
    }

    export default {
      name: 'MessageReader',
      components: { MessageDetail },
      data (){
        return {
          message: {}
        }
      },
      beforeRouteEnter (to, from, next) {
        const {mailbox, id} = getRoutePrams(to);

        MailService.getMessage(mailbox, id)
          .then(message => next(vm => vm.message = message));
      },
      beforeRouteUpdate (to, from, next) {
        const {mailbox, id} = getRoutePrams(to);
        this.message = {};
        MailService.getMessage(mailbox, id)
          .then(message => {
            this.message = message;
            next();
          });
      },
      methods: {
        onDelete(/*event*/) {
          // TODO: Implement me.
        },
      }
    }
</script>
