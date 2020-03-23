
import Vue from 'vue'
import Calendar from 'primevue/calendar';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Spinner from 'primevue/spinner';
import Toast from 'primevue/toast';

import ToastService from 'primevue/toastservice';


import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
Vue.use(ToastService);

Vue.component('Toast', Toast);
Vue.component('Button', Button);
Vue.component('Dropdown', Dropdown);
Vue.component('Calendar', Calendar);
Vue.component('Dialog', Dialog);
Vue.component('Spinner', Spinner);
