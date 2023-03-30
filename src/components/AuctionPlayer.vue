<<vue-splitter-v :left-width="300" :right-min-width="200">
  <div slot="left">Left panel content</div>
  <div slot="right">Right panel content</div>
</vue-splitter-v>
>
<script>
import { MultiSplitPane, Pane } from 'vue-multi-split-pane';
export default {
  components: {
    MultiSplitPane,
    Pane
    // ...
  }
};
</script>

<!-- optionally use our default style -->
<style>
/* @import 'vue-split-pane/dist/vue-split-pane.esm.css'; */
.vue-splitter-v {
  height: 100%;
}
</style>