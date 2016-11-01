import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './form.scss';
import loading from 'widget/loading/loading';

Vue.use(Element);

export default Vue.component("c-form", {
    name:'form',
    template: require('./form.html'),
    created(){
        this.fGetFormData();
    },
    computed: {
        loading: function(){
           console.log('loading ' + this.$store.getters.loading);
           return this.$store.getters.loading;
        },
        ruleForm: function () {
            return this.$store.getters.ruleForm;
        },
        rules: function () {
            return this.$store.getters.rules;
        }
    },
    methods: {
      ...mapActions({
          fGetFormData:'fGetFormData',
          fSubmitFormData:'fSubmitFormData'
      }),
      handleReset() {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.fSubmitFormData(this.ruleForm);
          } else {
            console.log('form error');
            return false;
          }
        });
      }
    }
});