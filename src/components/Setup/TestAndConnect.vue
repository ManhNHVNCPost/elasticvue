<template>
  <div>
    <h2 class="title mb-1">2. Test and connect</h2>
    <v-flex px-3>
      <v-form @submit.prevent="testConnection">
        <v-layout row>
          <v-flex lg6>
            <v-text-field id="host"
                          v-model="elasticsearchHost"
                          :rules="[hostValid]"
                          title="Host"
                          label="Host"
                          type="text"
                          autofocus
                          append-icon="clear"
                          @keyup.ctrl.enter="connect"
                          @click:append="resetElasticsearchHost"/>
          </v-flex>
          <v-flex lg6>
            <v-btn id="test_connection"
                   :color="testConnectionColor"
                   :loading="testLoading"
                   :disabled="hostValid !== true"
                   type="submit">
              Test connection
            </v-btn>

            <v-btn id="connect"
                   :disabled="hostValid !== true"
                   :color="connectColor"
                   :loading="connectLoading"
                   type="button"
                   @click.native="connect">Connect
            </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
      <p class="grey--text">To connect with credentials use http://username:password@host syntax.</p>
    </v-flex>

    <v-flex v-if="hasError" px-3>
      <v-alert :value="true" type="error">
        Could not connect. Please make sure that
        <ol class="pl-3">
          <li>Your cluster is reachable via {{elasticsearchHost}}</li>
          <li>You added the correct settings to your <strong>elasticserach.yml</strong> and restarted your cluster</li>
        </ol>

        <div class="mt-2">
          {{errorMessage}}
        </div>
      </v-alert>
    </v-flex>
  </div>
</template>

<script>
  import ConnectBase from '@/components/Setup/ConnectBase'

  export default {
    name: 'test-and-connect',
    extends: ConnectBase,
    computed: {
      hasError () {
        return this.testError || this.connectError
      },
      testConnectionColor () {
        return this.testError ? 'error' : 'primary'
      },
      connectColor () {
        return this.testSuccess ? 'success' : 'primary'
      }
    }
  }
</script>
