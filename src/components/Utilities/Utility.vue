<template>
  <v-list-tile>
    <v-list-tile-content>{{text}}</v-list-tile-content>
    <v-list-tile-action>
      <v-btn :id="name" :loading="loading" :color="color" @click.native="confirmMethod">Run</v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
  import { showErrorSnackbar, showSuccessSnackbar } from '@/mixins/ShowSnackbar'

  export default {
    class: 'Utility',
    props: {
      text: {
        default: '',
        type: String
      },
      method: {
        default: '',
        type: String
      },
      methodParams: {
        default: () => {
        },
        type: [Object, Array]
      },
      confirmMessage: {
        default: '',
        type: String
      },
      name: {
        default: 'utility',
        type: String
      }
    },
    data () {
      return {
        loading: false,
        error: false
      }
    },
    computed: {
      color () {
        return this.error ? 'error' : 'primary'
      }
    },
    methods: {
      confirmMethod () {
        if (this.confirmMessage) {
          if (confirm(this.confirmMessage)) {
            this.runMethod()
          }
        } else {
          this.runMethod()
        }
      },
      runMethod () {
        this.loading = true
        this.error = false
        this.getElasticsearchAdapter()
          .then(adapter => adapter[this.method](this.methodParams))
          .then(body => {
            this.loading = false
            this.error = false
            showSuccessSnackbar({ text: 'Success', additionalText: JSON.stringify(body) })
          })
          .catch(error => {
            this.loading = false
            this.error = true
            showErrorSnackbar({ text: 'Error', additionalText: JSON.stringify(error) })
          })
      }
    }
  }
</script>
