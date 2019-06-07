<template>
  <div>
    <el-dialog
      class="writeDialog"
      title="What do you want to write?"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="cancelWritingSetup"
    >
      <el-switch
        v-model="fiction"
        active-text="Fiction"
        inactive-text="Non-fiction"
        active-color="#444291"
        inactive-color="#8a89b7"
      /><br>
      <el-checkbox v-model="useTimeLimit" class="dialog-checkbox">
        Use time limit
      </el-checkbox>
      <!--<h3 v-show="useTimeLimit" class="dialog-header">Time limit</h3>-->
      <el-slider v-show="useTimeLimit" v-model="timeLimit" :min="1" :max="60" :format-tooltip="(v) => v+' minutes'" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelWritingSetup">Cancel</el-button>
        <el-button type="success" @click="startWriting">Confirm</el-button>
      </span>
    </el-dialog>
    <div
      id="write-box"
      v-loading="disableWriting"
      :element-loading-text="disableWritingText"
      element-loading-spinner="el-icon-notebook-1"
      element-loading-background="rgba(0, 0, 0, 0.7)"
    >
      <el-input
        ref="textbox"
        v-model="text"
        type="textarea"
        :rows="14"
        :min-length="50"
        :maxlength="maxWritingLength"
        show-word-limit
        placeholder="Once upon a time..."
      />
    </div>
  </div>
</template>

<script>
// import WriteConfigDialog from '@/components/WriteConfigDialog.vue'

export default {
  name: 'Write',
  components: {

  },
  data: function () {
    return {
      text: '',
      disableWriting: true,
      disableWritingText: 'Press confirm to start writing',
      dialogVisible: true,
      dialogConfirm: false,
      fiction: true,
      useTimeLimit: true,
      timeLimit: 10,
      maxWritingLength: 4000
    }
  },
  methods: {
    cancelWritingSetup: function () {
      this.$router.push('/')
    },
    startWriting: function () {
      this.dialogVisible = false
      this.disableWritingText = 'Please wait...'
      axios.get('/api/beginwriting')
      .then(response => (this.info = response))

      this.disableWriting = false
      this.$refs.textbox.$el.children[0].focus()
    }
  }
}
</script>

<style scoped>
.dialog-header {
  margin-top: 30px;
}
.dialog-checkbox {
  margin-top: 20px;
  margin-left: 40px;
}
.writeDialog {
  text-align: center;
}
</style>
