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
        <!-- mailbox-list -->

        <hr class="mailbox-border"/>

        <router-view></router-view>

    </section>
</template>

<script>
    import MailboxControls from '../components/MailboxControls';
    export default {
      components: {MailboxControls}
    }
</script>
