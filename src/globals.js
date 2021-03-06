import Vue from 'vue'
import DataLoader from '@/components/shared/DataLoader'
import ReloadButton from '@/components/shared/ReloadButton'
import ElasticsearchAdapterHelper from './mixins/ElasticsearchAdapterHelper'

// Global components
Vue.component('data-loader', DataLoader)
Vue.component('reload-button', ReloadButton)

// Global mixins
Vue.mixin(ElasticsearchAdapterHelper)
