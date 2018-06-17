<script>
export default {
  name: 'MyInput',
  props:['name', 'type', 'label', 'required', 'value'],
  data () {
    return {
    }
  },
  computed: {
    isRequired: function () {
      return this.required ? "required" : ""
    }
  },
  template: '<MyInput class="" v-model="event.hour" :name="\'hora\'" :type="\'time\'" :label="\'E que hora foi isso?\'" :required="true" />'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
