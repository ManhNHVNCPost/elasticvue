<template>
  <v-layout row wrap>
    <v-flex xl8 offset-xl2 lg10 offset-lg1>
      <v-card>
        <v-card-title>
          <h1 class="headline">Setup</h1>
        </v-card-title>

        <v-divider/>

        <v-card-text>
          <configure/>
        </v-card-text>

        <v-divider/>

        <v-card-text>
          <test-and-connect/>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import Configure from '@/components/Setup/Configure'
  import TestAndConnect from '@/components/Setup/TestAndConnect'

  export default {
    name: 'setup',
    components: {
      Configure,
      TestAndConnect
    }
  }
</script>
